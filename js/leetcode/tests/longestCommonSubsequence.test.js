const { longestCommonSubsequence } = require('../src/longestCommonSubsequence');

test('longestCommonSubsequence', () => {
  const text1 = '';
  const text2 = '';
  const output = 0;

  expect(longestCommonSubsequence(text1, text2)).toEqual(output);
});

test('longestCommonSubsequence', () => {
  const text1 = 'a';
  const text2 = '';
  const output = 0;

  expect(longestCommonSubsequence(text1, text2)).toEqual(output);
});

test('longestCommonSubsequence', () => {
  const text1 = 'a';
  const text2 = '';
  const output = 0;

  expect(longestCommonSubsequence(text1, text2)).toEqual(output);
});

test('longestCommonSubsequence', () => {
  const text1 = 'a';
  const text2 = 'a';
  const output = 1;

  expect(longestCommonSubsequence(text1, text2)).toEqual(output);
});

test('longestCommonSubsequence', () => {
  const text1 = 'abcde';
  const text2 = 'ace';
  const output = 3;

  expect(longestCommonSubsequence(text1, text2)).toEqual(output);
});

test('longestCommonSubsequence', () => {
  const text1 = 'abc';
  const text2 = 'abc';
  const output = 3;

  expect(longestCommonSubsequence(text1, text2)).toEqual(output);
});

test('longestCommonSubsequence', () => {
  const text1 = 'abc';
  const text2 = 'def';
  const output = 0;

  expect(longestCommonSubsequence(text1, text2)).toEqual(output);
});
