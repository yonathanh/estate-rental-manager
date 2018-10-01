const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaseSchema = new Schema(
  {
    manager: String,
    address: String,
    imageSRC: String,
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
