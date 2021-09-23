const { pool } = require('../database/connection');
const User = require('../model/users');

// essential to include following before and after functions if your tests involve database connection
beforeEach(async () => {
  await pool.query(
    'TRUNCATE TABLE users, posts, likes, comments RESTART IDENTITY;'
  );
});

afterAll(async () => {
  await pool.end();
});

test('signup', async () => {
  data = await User.addUser('sonic', 'makers', 'sonic@example.com');
  expect(data.username).toStrictEqual('sonic');
  expect(data.password).toStrictEqual('makers');
  expect(data.email).toStrictEqual('sonic@example.com');
});
