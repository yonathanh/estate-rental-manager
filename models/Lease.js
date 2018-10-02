const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaseSchema = new Schema(
  {
    manager: String,
    tenant: String,
    price: String,
    propertyID: String,
    paymentMethod: Object,
    amenities: Array,
    downPayment: Number,
    fees: Number,
    additionalCharges: Number,
    dueDate: Date,
    signature: String,
    status: { type: String, default: "pending" },
    imageUrl: String,
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

const lease = mongoose.model("lease", leaseSchema);

module.exports = lease;
