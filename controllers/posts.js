const Post = require("../model/posts");

const PostsController = {
  Index: async function (req, res) {
    let posts = await Post.getPosts();
    res.send({ posts: posts });
  },
  Show: async function (req, res) {
    res.json({ info: "Hello show posts router :)" });
  }
};
module.exports = PostsController;
