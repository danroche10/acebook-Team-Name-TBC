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
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password1', 'test@example.com');"
  );
  await Post.addPost('This is testing adding a post', 1);
  const data = await Post.getPosts();
  console.log(data);
  expect(data[0].id).toStrictEqual(1);
  expect(data[0].name).toStrictEqual('dandelion');
  expect(data[0].message).toStrictEqual('This is testing adding a post');
});
