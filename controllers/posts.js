const { request } = require('express');
const Post = require('../model/posts');
const Comment = require('../model/comments');
const url = require('url');

const PostsController = {
  //  let's change away from req, res as this is old syntax (I think)
  async Index(req, res) {
    const posts = await Post.getPosts();
    res.render('posts/index', { posts });
  },
  Show: async function (req, res) {
    post_id = req.url;
    post_id = post_id.split('/')[1];
    let post = await Post.getPostById(post_id);
    let comments = await Comment.getComments(post_id);
    res.render('posts/id', { post: post, comments: comments });
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
  async NewComment(req, res) {
    res.json({ info: 'Hello new comment post router :)' });
  },
  async NewLike(req, res) {
    res.json({ info: 'Hello new like post router :)' });
  },
};
module.exports = PostsController;
