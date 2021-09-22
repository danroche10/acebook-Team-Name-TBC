const { request } = require('express');
const Post = require('../model/posts');
const Comment = require('../model/comments');
const Like = require('../model/likes');
const url = require('url');

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
    const likes = await Like.numberOfLikes(post_id);
    res.render('posts/id', { post, comments, likes });
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
      await Comment.addComment(
        req.body.text,
        req.body.user_id,
        req.body.post_id
      );
      res.redirect(302, 'back');
    } catch (error) {
      console.log(error);
    }
  },
  NewLike: async function (req, res) {
    // console.log('our request:', req);
    // user_id will be defined by session eventually so can change below as required
    // i.e. req.body.user_id === undefined will check if session id exists or not
    try {
      if (req.body.post_id === undefined || req.body.user_id === undefined) {
        throw 'Parameters undefined!';
      }
      await Like.addLike(req.body.post_id, req.body.user_id);
      res.redirect(302, 'back'); // could use res.redirect('back') as it does the same
    } catch (error) {
      res.redirect(302, 'back');
    }
  },
};
module.exports = PostsController;
