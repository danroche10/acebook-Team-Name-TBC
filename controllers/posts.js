const Post = require("../queries")
const PostsController = {
  
  Index: function(req, res) {
    Post.getPosts(req,res)

  }
}
module.exports = PostsController;
