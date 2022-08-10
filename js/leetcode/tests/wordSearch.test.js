const { exist } = require('../src/wordSearch');

const cases = [
  {
    board: [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    word: 'ABCCED',
    output: true,
  },
  {
    board: [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    word: 'SEE',
    output: true,
  },
  {
    board: [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    word: 'ABCB',
    output: false,
  },
  {
    board: [
      ['a', 'b'],
      ['c', 'd'],
    ],
    word: 'acdb',
    output: true,
  },
];

test.each(cases)('exist', ({ board, word, output }) => {
  expect(exist(board, word)).toEqual(output);
});
