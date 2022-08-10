const { WordDictionary } = require('../src/addAndSearchWord');

test('WordDictionary', () => {
  const wordDictionary = new WordDictionary();
  wordDictionary.addWord('bad');
  wordDictionary.addWord('dad');
  wordDictionary.addWord('mad');

  expect(wordDictionary.search('pad')).toBe(false);
  expect(wordDictionary.search('bad')).toBe(true);
  expect(wordDictionary.search('.ad')).toBe(true);
  expect(wordDictionary.search('b..')).toBe(true);
});

test('WordDictionary', () => {
  const wordDictionary = new WordDictionary();
  wordDictionary.addWord('a');
  wordDictionary.addWord('ab');

  expect(wordDictionary.search('a')).toBe(true);
  expect(wordDictionary.search('a.')).toBe(true);
  expect(wordDictionary.search('ab')).toBe(true);
  expect(wordDictionary.search('.a')).toBe(false);
  expect(wordDictionary.search('.b')).toBe(true);
  expect(wordDictionary.search('ab.')).toBe(false);
  expect(wordDictionary.search('.')).toBe(true);
  expect(wordDictionary.search('..')).toBe(true);
});

test('WordDictionary', () => {
  const wordDictionary = new WordDictionary();
  wordDictionary.addWord('at');
  wordDictionary.addWord('and');
  wordDictionary.addWord('an');
  wordDictionary.addWord('add');

  expect(wordDictionary.search('a')).toBe(false);
  expect(wordDictionary.search('.at')).toBe(false);

  wordDictionary.addWord('bat');

  expect(wordDictionary.search('.at')).toBe(true);
  expect(wordDictionary.search('an.')).toBe(true);
  expect(wordDictionary.search('a.d.')).toBe(false);
  expect(wordDictionary.search('b.')).toBe(false);
  expect(wordDictionary.search('a.d')).toBe(true);
  expect(wordDictionary.search('.')).toBe(false);
});
