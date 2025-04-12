const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const formData = req.body;

    console.log("this is formData ", formData);
    if (!formData.title || !formData.content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required.",
      });
    }

    const dataToSave = {
      title: formData.title,
      date: formData.date,
      cover: formData.cover,
      content: formData.content,
      desc: formData.desc,
      category: formData.category,
    };

    console.log("data", dataToSave);

    const newPost = new Post(dataToSave);
    const savedPost = await newPost.save();

    res.json({
      success: true,
      message: "Blogs Uploaded Successfully!",
      post: savedPost,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({
      posts,
    });
  } catch (error) {
    return res.status(400).json({
      error: "error while getting post",
    });
  }
};

// getPostsBy id

exports.getPostsById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    res.json({
      post,
    });
  } catch (error) {
    return res.status(400).json({
      error: "error while creating post",
    });
  }
};
