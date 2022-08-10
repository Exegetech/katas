const { isPalindrome } = require('../src/palindromeLinkedList');
const { deserialize } = require('./helpers/listNode');

test('isPalindrome', () => {
  const head = deserialize([1]);
  const output = true;

  expect(isPalindrome(head)).toEqual(output);
});

test('isPalindrome', () => {
  const head = deserialize([1, 2]);
  const output = false;

  expect(isPalindrome(head)).toEqual(output);
});

test('isPalindrome', () => {
  const head = deserialize([1, 2, 3]);
  const output = false;

  expect(isPalindrome(head)).toEqual(output);
});

test('isPalindrome', () => {
  const head = deserialize([1, 2, 1]);
  const output = true;

  expect(isPalindrome(head)).toEqual(output);
});

test('isPalindrome', () => {
  const head = deserialize([1, 2, 2, 1]);
  const output = true;

  expect(isPalindrome(head)).toEqual(output);
});

test('isPalindrome', () => {
  const head = deserialize([1, 2, 2, 2]);
  const output = false;

  expect(isPalindrome(head)).toEqual(output);
});
