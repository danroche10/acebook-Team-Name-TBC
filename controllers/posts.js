const { request } = require('express');
const url = require('url');
const Post = require('../model/posts');
const Comment = require('../model/comments');

const PostsController = {
  //  let's change away from req, res as this is old syntax (I think)
  async Index(req, res) {
    // username and userId to be user for comment and posts
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
      // temporary workaround till user login - req.body.user_id
      await Post.addPost(req.body.text, req.body.user_id);
      res.redirect(302, 'back');
    } catch (error) {
      console.log(error);
    }
  },

  NewComment: async function (req, res) {
    try {
      await Comment.addComment(req.body.text, req.body.user_id, req.body.post_id);
      res.redirect(302, 'back')
    } catch (error) {
      console.log(error)
    }
  },
  async NewLike(req, res) {
    const { username, userId } = req.query;
    res.json({ info: 'Hello new like post router :)' });
  },
};
module.exports = PostsController;
