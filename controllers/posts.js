const Post = require("../model/posts");

const PostsController = {
  Index: async function (req, res) {
    let data = await Post.getPosts();
    // console.log(data);
    res.send(data);
  },
};
module.exports = PostsController;
