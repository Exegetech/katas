const { insert } = require('../src/insertInterval');

const cases = [
  {
    intervals: [
      [1, 3],
      [6, 9],
    ],
    newInterval: [2, 5],
    output: [
      [1, 5],
      [6, 9],
    ],
  },
  {
    intervals: [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    newInterval: [4, 8],
    output: [
      [1, 2],
      [3, 10],
      [12, 16],
    ],
  },
];

test.skip.each(cases)('insert', ({ intervals, newInterval, output }) => {
  expect(insert(intervals, newInterval)).toEqual(output);
});
