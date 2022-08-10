const { findWords } = require('../src/wordSearchII');

test('findWords', () => {
  const board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v'],
  ];

  const words = ['oath', 'pea', 'eat', 'rain'];
  const output = ['oath', 'eat'];

  expect(findWords(board, words)).toEqual(output);
});

test('findWords', () => {
  const board = [
    ['a', 'b'],
    ['c', 'd'],
  ];
  const words = ['abcb'];
  const output = [];

  expect(findWords(board, words)).toEqual(output);
});

test('findWords', () => {
  const board = [['a', 'b']];
  const words = ['ab', 'cd'];
  const output = ['ab'];

  expect(findWords(board, words)).toEqual(output);
});

test('findWords', () => {
  const board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v'],
  ];

  const words = ['oath', 'pea', 'eat', 'rain', 'hklf', 'hf'];
  const output = ['oath', 'eat', 'hklf', 'hf'];

  expect(findWords(board, words)).toEqual(output);
});
