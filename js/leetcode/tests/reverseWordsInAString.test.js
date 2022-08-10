const { reverseWords } = require('../src/reverseWordsInAString');

test('1', () => {
  expect(reverseWords('the sky is blue')).toEqual('blue is sky the');
});

test('2', () => {
  expect(reverseWords('   hello world   ')).toEqual('world hello');
});

test('3', () => {
  expect(reverseWords('a good   example')).toEqual('example good a');
});

test('4', () => {
  expect(reverseWords('  Bob   Loves   Alice   ')).toEqual('Alice Loves Bob');
});

test('5', () => {
  expect(reverseWords('Alice does not even like bob')).toEqual(
    'bob like even not does Alice'
  );
});
