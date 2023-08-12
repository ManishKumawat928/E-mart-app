const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
  role: {
    type: String,
    default: "visitior",
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
