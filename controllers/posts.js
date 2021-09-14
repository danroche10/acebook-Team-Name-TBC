const Post = require("../queries")
const PostsController = {
  
  Index: function(req, res) {

    Post.getPosts(function(err, posts) {
      if (err) { throw err; }
      console.log(res);
      res.console.log(posts);

    })


  }
}
module.exports = PostsController;
