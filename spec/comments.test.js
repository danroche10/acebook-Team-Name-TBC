const PostsController = require('../controllers/posts');
const { pool } = require('../database/connection');
const Post = require('../model/posts');
const Comment = require('../model/comments');

beforeEach(async () => {
  await pool.query(
    'TRUNCATE TABLE users, posts, likes, comments, images RESTART IDENTITY;'
  );
});

afterEach(async () => {
  await pool.end();
});

test('can add a comment to an existing post', async () => {
  let user_id = 1;
  let post_id = 1;
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password1', 'test@test.com'); INSERT INTO posts(text, created_at, user_id) VALUES('testtesttest', current_timestamp, 1);"
  );
  await Comment.addComment('This is a test comment', user_id, post_id);
  const data = await Comment.getComments(post_id);
  expect(data[0].id).toStrictEqual(1);
  expect(data[0].comment).toStrictEqual('This is a test comment');
  expect(data[0].name).toStrictEqual('dandelion');
});
