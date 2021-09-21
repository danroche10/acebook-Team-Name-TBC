const { test } = require('mocha');
const PostsController = require('../controllers/posts');
const { pool } = require('../database/connection'); // this is essential if your tests involve database connection
const Post = require('../model/posts'); // put whatever you are testing here

// essential to include following before and after functions if your tests involve database connection
beforeEach(async () => {
  await pool.query(
    'TRUNCATE TABLE users, posts, likes, comments RESTART IDENTITY;'
  );
});

afterEach(() => {
  pool.end();
});

test('checks post can be added', async () => {
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password1', 'test@test.com');"
  );
  await Post.addPost('This is testing adding a post', 1);
  const data = await Post.getPosts();
  expect(data).toStrictEqual([
    { id: 1, message: 'This is testing adding a post' },
  ]);

test('checks a single post is retrieved', async() => {
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password1', 'test@test.com');"
  )
  await Post.addPost('This is our test retrieving post', 1); 
  await Post.addPost('This is our second test retrieving post', 1);
  const post_id = 1 
  const post = await Post.getPostById(post_id)
  expect(post).toStrictEqual([
    {id: 1, message: 'This is our test retrieving post'}])
})
});
