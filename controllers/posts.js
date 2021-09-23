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
      await Post.addPost(req.body.text, req.session.user.user_id);
      res.redirect(302, 'back');
    } catch (error) {
      console.log(error.message);
    }
  },

  NewComment: async function (req, res) {
    try {
      await Comment.addComment(
        req.body.text,
        req.session.user.user_id,
        req.body.post_id
      );
      res.redirect(302, 'back');
    } catch (error) {
      console.log(error.message);
    }
  },

  async NewLike(req, res) {
    try {
      const postId = req.body.post_id;
      const userId = req.session.user.user_id;
      if (postId === undefined || userId === undefined) {
        throw 'Parameters undefined!';
      }
      const alreadyLiked = await Like.likeExists(postId, userId);
      if (alreadyLiked === true) {
        throw 'Already liked by this user!';
      }
      await Like.addLike(postId, userId);
      res.redirect(302, 'back');
    } catch (error) {
      res.redirect(302, 'back');
    }
  },
};

module.exports = PostsController;
