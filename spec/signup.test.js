const { pool } = require('../database/connection');
const User = require('../model/users');

// essential to include following before and after functions if your tests involve database connection
beforeEach(async () => {
  await pool.query(
    'TRUNCATE TABLE users, posts, likes, comments RESTART IDENTITY;'
  );
});

afterEach(() => {
  pool.end();
});

test('signup', () => {
  expect(User.addUser('sonic', 'makers', 'sonic@example.com')).toStrictEqual({
    username: 'sonic',
    password: 'makers',
    email: 'sonic@example.com',
  });
});
