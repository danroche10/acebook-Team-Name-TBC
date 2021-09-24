const { pool } = require('../database/connection');
const Like = require('../model/likes');

beforeEach(async () => {
  await pool.query(
    'TRUNCATE TABLE users, posts, likes, comments, images RESTART IDENTITY;'
  );
});

afterAll(() => {
  pool.end();
});

test('add and get like', async () => {
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

test('check number of likes', async () => {
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('friartuck', 'Password2', 'test@test.com');"
  );
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password3', 'test@test.com');"
  );
  await pool.query("INSERT INTO posts (text, user_id) VALUES ('Goodbye', 1);");
  await pool.query("INSERT INTO posts (text, user_id) VALUES ('hello', 1);");

  await Like.addLike(1, 1);
  await Like.addLike(1, 2);
  await Like.addLike(2, 2);
  let data = await Like.numberOfLikes(1);
  expect(data).toStrictEqual(2);
});

test('check if user has already liked post - they have', async () => {
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('friartuck', 'Password2', 'test@test.com');"
  );
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password3', 'test@test.com');"
  );
  await pool.query("INSERT INTO posts (text, user_id) VALUES ('Goodbye', 1);");
  await Like.addLike(1, 2);
  let data = await Like.likeExists(1, 2);
  expect(data).toStrictEqual(true);
});

test('check if user has already liked post - they have not', async () => {
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('friartuck', 'Password2', 'test@test.com');"
  );
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password3', 'test@test.com');"
  );
  await pool.query("INSERT INTO posts (text, user_id) VALUES ('Goodbye', 1);");
  let data = await Like.likeExists(1, 2);
  expect(data).toStrictEqual(false);
});
