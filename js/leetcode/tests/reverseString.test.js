const { reverseString } = require('../src/reverseString');

test.skip('1', () => {
  const s = ['h', 'e', 'l', 'l', 'o'];
  const output = ['o', 'l', 'l', 'e', 'h'];

  expect(reverseString(s)).toEqual(output);
});

test.skip('2', () => {
  const s = ['H', 'a', 'n', 'n', 'a', 'h'];
  const output = ['h', 'a', 'n', 'n', 'a', 'H'];

  expect(reverseString(s)).toEqual(output);
});
