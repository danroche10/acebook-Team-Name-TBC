const Post = require("../model/posts");

const PostsController = {
	Index: async function (req, res) {
		let posts = await Post.getPosts();
		res.render("posts/index", { posts: posts });
	},
};
module.exports = PostsController;
