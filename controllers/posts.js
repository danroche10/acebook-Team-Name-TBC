const { request } = require('express');
const Post = require('../model/posts');

const PostsController = {
  //  let's change away from req, res as this is old syntax (I think)
  async Index(req, res) {
    const posts = await Post.getPosts();
    res.render('posts/index', { posts });
  },
  async Show(req, res) {
    res.json({ info: 'Hello show posts router :)' });
  },
  async New(req, res) {
    try {
      // temporary workaround till user login - req.body.user_id
      await Post.addPost(req.body.text, req.body.user_id);
      res.redirect(302, 'back'); // could use res.redirect('back') as it does the same
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
