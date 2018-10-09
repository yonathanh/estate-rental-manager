const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    name: String,
    email: String,
    phone: Number,
    address: String,
    googleID: String,
    imageUrl: String,
    imgName: String,
    imgPath: String,
    contracts: [{ type: Schema.Types.ObjectId, ref: "Lease" }],
    properties: [{ type: Schema.Types.ObjectId, ref: "Property" }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
