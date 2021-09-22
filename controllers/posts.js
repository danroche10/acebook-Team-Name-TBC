const { request } = require('express');
const url = require('url');
const Post = require('../model/posts');
const Comment = require('../model/comments');

const PostsController = {
  //  let's change away from req, res as this is old syntax (I think)
  async Index(req, res) {
    const posts = await Post.getPosts();
    res.render('posts/index', { posts });
  },
  async Show(req, res) {
    post_id = req.url;
    post_id = post_id.split('/')[1];
    const post = await Post.getPostById(post_id);
    const comments = await Comment.getComments(post_id);
    res.render('posts/id', { post, comments });
  },
  async New(req, res) {
    try {
      await Post.addPost(req.body.text, req.session.user.user_id);
      res.redirect(302, 'back');
    } catch (error) {
      console.log(error.message);
    }
  },

  NewComment: async function (req, res) {  
    try {
      await Comment.addComment(req.body.text, req.session.user.user_id, req.body.post_id);
      res.redirect(302, 'back')
    } catch (error) {
      console.log(error.message)
    }
  },
  async NewLike(req, res) {
    const { username, user_id } = req.session;
    res.json({ info: 'Hello new like post router :)' });
  },
};

module.exports = PostsController;
