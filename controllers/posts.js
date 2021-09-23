const Post = require('../model/posts');
const Comment = require('../model/comments');
const Like = require('../model/likes');

const PostsController = {
  //  let's change away from req, res as this is old syntax (I think)
  async Index(req, res) {
    try {
      const posts = await Post.getPosts();
      const images = await Post.getImages();
      images.forEach((element) => {
        posts.forEach((posts) => {
          if (element.post_id === posts.id) {
            posts['image'] = element.data.toString('base64');
          }
        });
      });
      res.render('posts/index', { posts });
    } catch (error) {
      console.log(error.message);
    }
  },
  async Show(req, res) {
    post_id = req.url;
    post_id = post_id.split('/')[1];
    try {
      const post = await Post.getPostById(post_id);
      const image = await Post.getImages();
      const comments = await Comment.getComments(post_id);
      const likes = await Like.numberOfLikes(post_id);
      image.forEach((element) => {
        post.forEach((posts) => {
          if (element.post_id === posts.id) {
            post[0]['image'] = element.data.toString('base64');
          }
        });
      });
      res.render('posts/id', { post, comments, likes });
    } catch (error) {
      console.log(error.message);
    }
  },
  async New(req, res) {
    let post;
    let post_id;
    try {
      post = await Post.addPost(req.body.text, req.session.user.user_id);
      post_id = post.rows[0].id;
      if (req.files) {
        await Post.addImage(req.files.pic.name, req.files.pic.data, post_id);
      }
      res.redirect(302, 'back');
    } catch (error) {
      console.log(error.message);
    }
  },

  async NewComment(req, res) {
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
