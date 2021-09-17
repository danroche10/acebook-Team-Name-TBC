const PostsController = require('../controllers/posts');
const { pool } = require('../database/connection');
const Post = require('../model/posts');

beforeEach(async () => {
  await pool.query(
    'TRUNCATE TABLE users, posts, likes, comments RESTART IDENTITY;'
  );
});

afterEach(async () => {
  await pool.end();
});

test('checks if we see most recent posts first', async () => {
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password1', 'test@test.com'); INSERT INTO posts(text, created_at, user_id) VALUES('test1', current_timestamp, 1);"
  );
  await pool.query(
    "INSERT INTO posts(text, created_at, user_id) VALUES('test2', current_timestamp, 1) ; INSERT INTO posts(text, created_at, user_id) VALUES('test3', current_timestamp, 1)"
  );
  const data = await Post.getPosts();
  console.log(data);
  expect(data).toStrictEqual([
    { id: 3, message: 'test3' },
    { id: 2, message: 'test2' },
    { id: 1, message: 'test1' },
  ]);
});
