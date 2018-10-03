const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaseSchema = new Schema(
  {
    manager: String,
    tenant: String,
    startDate: Date,
    endDate: Date,
    property: [{ type: Schema.Types.ObjectId, ref: "Property" }],
    paymentMethod: Object,
    signature: String,
    status: { type: String, default: "pending" }
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
