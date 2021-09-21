const { TestWatcher } = require('@jest/core');
const { pool } = require('../database/connection');
const User = require('../model/users');

// essential to include following before and after functions if your tests involve database connection
beforeEach(async () => {
  await pool.query(
    'TRUNCATE TABLE users, posts, likes, comments RESTART IDENTITY;'
  );
  await pool.query(
    "INSERT INTO users(username, password, email) VALUES('dandelion', 'Password1', 'test@test.com');",
  );
});

afterAll(() => {
  pool.end();
});

test('authenticate', async () => {
  const isAuthenticated = await User.authenticate('dandelion', 'Password1');
  expect(isAuthenticated.username).toStrictEqual('dandelion');
});

test('try to authenticate with incorrect username', async () => {
  const isAuthenticated = await User.authenticate('wrongusername', 'Password1');
  expect(isAuthenticated).toStrictEqual(false);
});

test('try to authenticate with correct username and incorrect password', async () => {
  const isAuthenticated = await User.authenticate('dandelion', 'wrongpassword');
  expect(isAuthenticated).toStrictEqual(false);
});
