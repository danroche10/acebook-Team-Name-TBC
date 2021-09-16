// This is an example

const sum = require('./sum.js');

test('sum', () => {
  console.log(process.env.VARIABLE);
  expect(sum(1, 2)).toBe(3);
});
