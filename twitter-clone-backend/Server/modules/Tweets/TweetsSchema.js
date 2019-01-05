const mongoose = require("mongoose");

const tweetsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  body: {
    type: String,
    required: true
  },
  image: String,
  location: String
});

module.exports = mongoose.model("tweets", tweetsSchema);
