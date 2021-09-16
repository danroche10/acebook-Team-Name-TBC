const Post = require("../model/posts");

const PostsController = {
  //  let's change away from req, res as this is old syntax (I think)
  Index: async function (req, res) {
    let posts = await Post.getPosts();
    res.send({ posts: posts });
  },
  Show: async function (req, res) {
    res.json({ info: "Hello show posts router :)" });
  },
  New: async function (req, res) {
    res.json({ info: "Hello new post router :)" });
  },
  NewComment: async function (req, res) {
    res.json({ info: "Hello new comment post router :)" });
  },
  NewLike: async function (req, res) {
    res.json({ info: "Hello new like post router :)" });
  },
  
};
module.exports = PostsController;
