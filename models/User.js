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
    contracts: Array,
    Properties: Array
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
