const User = require('../../model/users');

test('signup', () => {
  expect(User.addUser('username', 'password', 'email')).toBe(true);
});
