const { request } = require('express');
const Post = require('../model/posts');
const url = require('url');

const PostsController = {
  //  let's change away from req, res as this is old syntax (I think)
  Index: async function (req, res) {
    let posts = await Post.getPosts();
    res.render('posts/index', { posts: posts });
  },
  Show: async function (req, res) {
    // console.log(req.url);
    post_id = req.url;
    post_id = post_id.split('/')[1];
    // console.log(post_id);
    res.json({ info: 'Hello show posts router :)', post_id });
  },
  New: async function (req, res) {
    try {
      // temporary workaround till user login - req.body.user_id
      await Post.addPost(req.body.text, req.body.user_id);
      res.redirect(302, 'back'); // could use res.redirect('back') as it does the same
    } catch (error) {
      console.log(error);
    }
  },
  NewComment: async function (req, res) {
    res.json({ info: 'Hello new comment post router :)' });
  },
  NewLike: async function (req, res) {
    res.json({ info: 'Hello new like post router :)' });
  },
};
module.exports = PostsController;
