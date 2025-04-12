const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  cover: {
    type: String,
  },
  date: {
    type: String,
  },

  title: {
    type: String,
    requried: true,
  },

  desc: {
    type: String,
  },
  category: {
    type: String,
    default: "general",
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
