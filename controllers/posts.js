const { request } = require('express');
const Post = require('../model/posts');
const Comment = require('../model/comments');
const url = require('url');

const PostsController = {
  //  let's change away from req, res as this is old syntax (I think)
  Index: async function (req, res) {
    let posts = await Post.getPosts();
    res.render('posts/index', { posts: posts });
  },
  Show: async function (req, res) {
    post_id = req.url;
    post_id = post_id.split('/')[1];
    let post = await Post.getPostById(post_id);
    let comments = await Comment.getComments(post_id);
    res.render('posts/id', { post: post, comments: comments });
  },
  New: async function (req, res) {
    try {
      // temporary workaround till user login - req.body.user_id
      await Post.addPost(req.body.text, req.body.user_id);
      res.redirect(302, 'back');
    } catch (error) {
      console.log(error);
    }
  },
  NewComment: async function (req, res) {
    res.json({ info: 'Hello new comment post router :)' });
  },
  NewLike: async function (req, res) {
    try {
      await Like.addLike(req.body.post_id, req.body.user_id);
      res.redirect(302, 'back'); // could use res.redirect('back') as it does the same
      } catch (error) {
        console.log(error);
     }
  } 
};
module.exports = PostsController;