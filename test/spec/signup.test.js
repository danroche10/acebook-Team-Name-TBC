const User = require('../../model/users');

test('signup', () => {
  expect(User.addUser('sonic', 'makers', 'sonic@example.com')).toStrictEqual({username: "sonic", password: "makers", email: "sonic@example.com"});
});
