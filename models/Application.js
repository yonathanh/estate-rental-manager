const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema(
  {
    applicant: String,
    contract: String,
    propertyID: String,
    fileName: String,
    filePath: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
