const express = require('express')
const postsRouter = express.Router();

const PostsController = require('../controllers/posts')
postsRouter.get('/id', PostsController.Show);
postsRouter.get('/', PostsController.Index);

module.exports = postsRouter;

