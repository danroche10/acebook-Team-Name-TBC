const express = require('express')
const router = express.Router();

console.log("posts.js before route")
const PostsController = require('../controllers/posts')
router.get('/', PostsController.Index);
console.log("posts.js after route")
module.exports = router;

