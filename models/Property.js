const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Lease = require("./Lease");

const propertySchema = new Schema(
  {
    manager: String,
    tenants: Array,
    type: String,
    beds: Number,
    baths: Number,
    squareFeet: Number,
    estimatePrice: Number,
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
    lat: Number,
    lng: Number,
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
