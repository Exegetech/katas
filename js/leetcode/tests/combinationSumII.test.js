const { combinationSum2 } = require('../src/combinationSumII');

const cases = [
  // {
  //   candidates: [10,1,2,7,6,1,5],
  //   target: 8,
  //   output:
  //   [
  //   [1,2,5],
  //   [1,7],
  //   [1,1,6],
  //   [2,6]
  //   ]
  // },
  // {
  //   candidates: [2,5,2,1,2],
  //   target: 5,
  //   output:
  //   [
  //   [1,2,2],
  //   [5]
  //   ]
  // },
  // {
  //   candidates: [
  //     1,1,1,1,1,
  //     1,1,1,1,1],
  //   target: 3,
  //   output: [
  //     [1,1,1]
  //   ]
  // },
  // {
  //   candidates: [
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //   ],
  //   target: 3,
  //   output: [
  //     [1,1,1],
  //   ]
  // },
  // {
  //   candidates: [
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //     1,1,1,1,1,1,1,1,1,1,
  //   ],
  //   target: 30,
  //   output: [
  //     1,
  //   ]
  // }
];

test.skip.each(cases)('combinationSum2', ({ candidates, target, output }) => {
  expect(combinationSum2(candidates, target)).toEqual(output);
});
