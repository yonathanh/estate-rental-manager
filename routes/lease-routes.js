// routes/Lease-routes.js
const express = require("express");
const router = express.Router();

const Property = require("../models/Property");
const uploadCloud = require("../config/cloudinary.js");

const mongoose = require("mongoose");
const Lease = require("../models/Lease");

// GET route => to get all the Properties
router.get("/leases", (req, res, next) => {
  Lease.find()
    .then(allTheLeases => {
      res.json(allTheLeases);
    })
    .catch(err => {
      res.json(err);
    });
});

// manager: String,
// tenant: String,
// startDate: Date,
// endDate: Date,
// property: [{ type: Schema.Types.ObjectId, ref: "Property" }],
// paymentMethod: Object,
// signature: String,
// status: { type: String, default: "pending" }

// POST route => to create a new Lease
router.post(
  "/lease/:propertyID",
  uploadCloud.single("photo"),
  (req, res, next) => {
    Property.findById(req.params.propertyID)
      .then(propertyFromDB => {
        console.log("propertyFromDB", propertyFromDB);
        const LeaseObject = {
          manager: propertyFromDB.manager,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          property: req.body.property
        };
        if (req.user) {
          LeaseObject.tenant = req.user._id;
        }
        if (req.file) {
          LeaseObject.imgName = req.file.originalname;
          LeaseObject.imgPath = req.file.url;
        }
        Lease.create(LeaseObject)
          .then(leaseFromDB => {
            res.json(leaseFromDB);
            propertyFromDB.contractDetails
              .push(leaseFromDB)
              .propertyFromDB.save()
              .then(() => {
                res.json(leaseFromDB);
              })
              .catch(err => {
                res.status(400).json(err);
              });
          })
          .catch(err => {
            res.json(err);
          });
      })
      .catch(err => {
        res.json(err);
      });
  }
);

// GET route => to get a specific Lease/detailed view
router.get("/lease/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // our Lease have array of tasks' ids and
  // we can use .populate() method to get the whole task objects
  //                                   ^
  //                                   |
  //

  Lease.findById(req.params.id) //.populate()
    .populate("manager")
    .populate("tenant")
    .populate("property")
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to update a specific Lease
router.put("/lease/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Lease.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Lease with ${req.params.id} is updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE route => to delete a specific Lease
router.delete("/lease/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Lease.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Lease with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
