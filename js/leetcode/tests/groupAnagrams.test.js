const { groupAnagrams } = require('../src/groupAnagrams');

test('1', () => {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  const output = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];

  expect(groupAnagrams(strs)).toEqual(output);
});

test('2', () => {
  const strs = [''];
  const output = [['']];

  expect(groupAnagrams(strs)).toEqual(output);
});

test('3', () => {
  const strs = ['a'];
  const output = [['a']];

  expect(groupAnagrams(strs)).toEqual(output);
});
