const { request } = require('express');
const Post = require('../model/posts');
const Comment = require('../model/comments');
const Like = require('../model/likes');
const url = require('url');

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
    // Line 32 needs to be used on 34 instead of req.body
    const { username, userId } = req.session;
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
    try {
      if (
        req.body.post_id === undefined ||
        req.session.user.userId === undefined
      ) {
        throw 'Parameters undefined!';
      }
      await Like.addLike(req.body.post_id, req.session.user.userId);
      res.redirect(302, 'back'); // could use res.redirect('back') as it does the same
    } catch (error) {
      res.redirect(302, 'back');
    }
  },
};
module.exports = PostsController;
