const { decodeString } = require('../src/decodeString');

test('1', () => {
  const s = '3[a]2[bc]';
  const output = 'aaabcbc';

  expect(decodeString(s)).toEqual(output);
});

test('2', () => {
  const s = '3[a2[c]]';
  const output = 'accaccacc';

  expect(decodeString(s)).toEqual(output);
});

test('3', () => {
  const s = 'ef';
  const output = 'ef';

  expect(decodeString(s)).toEqual(output);
});

test('4', () => {
  const s = '2[abc]3[cd]ef';
  const output = 'abcabccdcdcdef';

  expect(decodeString(s)).toEqual(output);
});

test('4', () => {
  const s = 'abc3[cd]xyz';
  const output = 'abccdcdcdxyz';

  expect(decodeString(s)).toEqual(output);
});
