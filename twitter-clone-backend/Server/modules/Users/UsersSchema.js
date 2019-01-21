const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 25
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 25
  },
  userName: {
    type: String,
    required: true,
    maxlength: 40,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImage: {
    type: String
  },
  headerImage: {
    type: String
  },
  country: {
    type: String,
    required: true,
    maxlength: 60
  },
  phone: {
    type: String,
    required: true,
    maxlength: 17
  },
  email: {
    type: String,
    required: true,
    maxlength: 50
  },
  birthdate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("users", userSchema);
