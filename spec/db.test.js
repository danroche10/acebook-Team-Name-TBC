const { pool } = require('../database/connection');
const Post = require('../model/posts');

test('checks test db is accessed', () => {
  expect(Post.getPosts()).resolves.toStrictEqual([
    { id: 1, message: 'testtesttest' },
  ]);
  pool.end();
});
