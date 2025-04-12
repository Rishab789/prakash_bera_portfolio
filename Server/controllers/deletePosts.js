const Post = require("../models/postModel");

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    console.log("this is the title", title);

    await Post.findByIdAndDelete(id);
    res.json({
      success: true,
      message: `Blog named ${title} deleted`,
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
