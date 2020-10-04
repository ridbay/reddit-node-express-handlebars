const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
  }, {
    timestamps: true,
  })
  
  const Post = mongoose.model("Post", postSchema);
  
  module.exports = Post;