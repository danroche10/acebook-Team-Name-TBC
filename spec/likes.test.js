const { pool } = require('../database/connection');
const Like = require('../model/likes');

beforeEach(async () => {
  await pool.query(
    'TRUNCATE TABLE users, posts, likes, comments RESTART IDENTITY;'
  );
});

afterEach(() => {
  pool.end();
});

test('likes', async () => {
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password1', 'test@test.com');"
  );
  await pool.query("INSERT INTO posts (text, user_id) VALUES ('Hello', 1);");
  await Like.addLike(1, 1);
  const data = await Like.getLikeById(1);
  expect(data).toStrictEqual({
    post_id: 1,
    user_id: 1,
  });
});
