const { pool } = require('../database/connection'); // this is essential if you are testing anything to do with the database
const Post = require('../model/posts');

test('checks test db is accessed', () => {
  expect(Post.getPosts()).resolves.toStrictEqual([
    { id: 1, message: 'testtesttest' },
  ]);
  pool.end();
});
