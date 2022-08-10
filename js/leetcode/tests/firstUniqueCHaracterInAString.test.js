const { firstUniqChar } = require('../src/firstUniqueCharacterInAString');

test('1', () => {
  const s = 'leetcode';
  const output = 0;

  expect(firstUniqChar(s)).toEqual(output);
});

test('2', () => {
  const s = 'loveleetcode';
  const output = 2;

  expect(firstUniqChar(s)).toEqual(output);
});

test('3', () => {
  const s = 'aabb';
  const output = -1;

  expect(firstUniqChar(s)).toEqual(output);
});
