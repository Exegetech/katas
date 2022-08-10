const { combinationSum } = require('../src/combinationSum');

const cases = [
  {
    candidates: [2, 3, 6, 7],
    target: 7,
    output: [[2, 2, 3], [7]],
  },
  {
    candidates: [2, 3, 5],
    target: 8,
    output: [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ],
  },
  {
    candidates: [2],
    target: 1,
    output: [],
  },
];

test.each(cases)('combinationSum', ({ candidates, target, output }) => {
  expect(combinationSum(candidates, target)).toEqual(output);
});
