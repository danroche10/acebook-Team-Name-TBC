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
          // console.log(element.post_id);
          // console.log(posts.id);
          if (element.post_id === posts.id) {
            posts['image'] = element.data.toString('base64');
          }
        });
      });
      // posts.forEach((element) => {
      //   console.log(element);
      // });
      res.render('posts/index', { posts });
    } catch (error) {
      console.log(error.message);
    }
  },
  async Show(req, res) {
    post_id = req.url;
    post_id = post_id.split('/')[1];
    const post = await Post.getPostById(post_id);
    const image = await Post.getImageById(post_id);
    const comments = await Comment.getComments(post_id);
    const likes = await Like.numberOfLikes(post_id);
    const bsSixtyFour = image[0].data.toString('base64');
    // console.log(image[0].data.toString('base64'))
    console.log(post);
    post[0]['image'] = bsSixtyFour;
    console.log(post);
    res.render('posts/id', { bsSixtyFour, post, comments, likes });
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
