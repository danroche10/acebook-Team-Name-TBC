const PostsController = require('../controllers/posts');
const { pool } = require('../database/connection'); // this is essential if your tests involve database connection
const Post = require('../model/posts'); // put whatever you are testing here

// essential to include following before and after functions if your tests involve database connection
beforeEach(async () => {
  await pool.query(
    'TRUNCATE TABLE users, posts, likes, comments, images RESTART IDENTITY;'
  );
});

afterAll(async () => {
  await pool.end();
});

test('checks a single post is retrieved', async () => {
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password1', 'test@test.com');"
  );
  await Post.addPost('This is our test retrieving post', 1);
  await Post.addPost('This is our second test retrieving post', 1);
  const post_id = 1;
  const post = await Post.getPostById(post_id);
  expect(post[0].id).toStrictEqual(1);
  expect(post[0].message).toStrictEqual('This is our test retrieving post');
});
