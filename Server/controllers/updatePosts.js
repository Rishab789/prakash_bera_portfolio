const Post = require("../models/postModel");

exports.updatePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const post = await Post.findByIdAndUpdate(
      { _id: id },
      { title, body, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: post,
      message: `Updated Successfully`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
