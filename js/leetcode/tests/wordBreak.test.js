const { wordBreak } = require('../src/wordBreak');

test('wordBreak', () => {
  const s = 'leetcode';
  const wordDict = ['leet', 'code'];
  const output = true;

  expect(wordBreak(s, wordDict)).toEqual(output);
});

test('wordBreak', () => {
  const s = 'applepenapple';
  const wordDict = ['apple', 'pen'];
  const output = true;

  expect(wordBreak(s, wordDict)).toEqual(output);
});

test('wordBreak', () => {
  const s = 'catsandog';
  const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
  const output = false;

  expect(wordBreak(s, wordDict)).toEqual(output);
});
