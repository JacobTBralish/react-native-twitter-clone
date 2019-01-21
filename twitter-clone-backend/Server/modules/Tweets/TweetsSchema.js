const mongoose = require("mongoose");

const tweetsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    tweet: {
      type: String,
      required: true
    },
    image: String,
    location: String,
    likeCount: {
      type: Number,
      default: 0
    },
    comments: {
      type: Number,
      default: 0
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("tweets", tweetsSchema);
