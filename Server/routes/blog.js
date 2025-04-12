const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer.middleware");

const {
  createPost,
  getAllPosts,
  getPostsById,
} = require("../controllers/postController");
const { deleteBlog } = require("../controllers/deletePosts");
const { updatePosts } = require("../controllers/updatePosts");

router.post("/posts/create", upload.any(), createPost);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostsById);
router.delete("/posts/:id", deleteBlog);
router.put("/posts/:id", updatePosts);

module.exports = router;
