const { eraseOverlapIntervals } = require('../src/nonOverlappingIntervals');

const cases = [
  {
    intervals: [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ],
    output: 1,
  },
  {
    intervals: [
      [1, 2],
      [1, 2],
      [1, 2],
    ],
    output: 2,
  },
  {
    intervals: [
      [1, 2],
      [2, 3],
    ],
    output: 0,
  },
];

test.skip.each(cases)('eraseOverlapIntervals', ({ intervals, output }) => {
  expect(eraseOverlapIntervals(intervals)).toEqual(output);
});
