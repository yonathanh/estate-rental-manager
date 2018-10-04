const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const Lease = require("./Lease");

const propertySchema = new Schema(
  {
    manager: { type: Schema.Types.ObjectId, ref: "User" },
    tenants: { type: Schema.Types.ObjectId, ref: "User" },
    type: String,
    beds: Number,
    baths: Number,
    squareFeet: Number,
    price: Number,
    address: String,
    city: String,
    state: String,
    zip: Number,
    imageUrl: String,
    pets: String,
    smoking: String,
    parking: String,
    downPayment: Number,
    fees: Number,
    lat: { type: Number, default: 40.7128 },
    lng: { type: Number, default: 74.006 },
    lease: { type: Schema.Types.ObjectId, ref: "Lease" },
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
