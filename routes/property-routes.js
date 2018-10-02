// routes/Property-routes.js
const express = require("express");
const router = express.Router();

const uploadCloud = require("../config/cloudinary.js");

const mongoose = require("mongoose");
const Property = require("../models/Property");

// GET route => to get all the Properties
router.get("/properties", (req, res, next) => {
  Property.find()
    .then(allTheProperties => {
      res.json(allTheProperties);
    })
    .catch(err => {
      res.json(err);
    });
});

// manager: String,
// tenants: Array,
// address: String,
// propertyDetails: Object,
// imageUrl: String,
// estimatePrice: Number,
// lat: Number,
// lng: Number,
// contractDetails: Array,
// leaseID: Array,
// imgName: String,
// imgPath: String

// POST route => to create a new Property
router.post("/properties", uploadCloud.single("photo"), (req, res, next) => {
  const PropertyObject = {
    address: req.body.address,
    imageUrl: req.body.imageUrl,
    estimatePrice: req.body.estimatePrice,
    lat: req.body.lat,
    lng: req.body.lng
  };
  if (req.user) {
    PropertyObject.manager = req.user._id;
  }
  if (req.file) {
    PropertyObject.imgName = req.file.originalname;
    PropertyObject.imgPath = req.file.url;
  }
  Property.create(PropertyObject)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get a specific Property/detailed view
router.get("/properties/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // our Property have array of tasks' ids and
  // we can use .populate() method to get the whole task objects
  //                                   ^
  //                                   |
  //

  Property.findById(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to update a specific Property
router.put("/properties/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Property.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Property with ${req.params.id} is updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE route => to delete a specific Property
router.delete("/properties/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Property.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Property with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
