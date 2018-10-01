const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    manager: String,
    tenants: Array,
    address: String,
    propertyDetails: String,
    imageUrl: String,
    estimatePrice: Number,
    lat: Number,
    lng: Number,
    contractDetails: Array,
    leaseID: Array,
    imgName: String,
    imgPath: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
