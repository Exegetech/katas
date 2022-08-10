const { merge } = require('../src/mergeIntervals');

const cases = [
  {
    intervals: [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ],
    output: [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
  },
  {
    intervals: [
      [1, 4],
      [4, 5],
    ],
    output: [[1, 5]],
  },
];

test.each(cases)('merge', ({ intervals, output }) => {
  expect(merge(intervals)).toEqual(output);
});
