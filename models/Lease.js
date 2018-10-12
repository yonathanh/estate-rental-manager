const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const Property = require("./Property");

const leaseSchema = new Schema(
  {
    manager: { type: Schema.Types.ObjectId, ref: "User" },
    tenant: { type: Schema.Types.ObjectId, ref: "User" },
    startDate: Date,
    endDate: Date,
    property: { type: Schema.Types.ObjectId, ref: "Property" },
    paymentMethod: Object,
    signature: String,
    status: { type: Boolean, default: false }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Lease = mongoose.model("Lease", leaseSchema);

module.exports = Lease;
