const {
  earliestAcq,
} = require('../src/theEarliestMomentWhenEveryoneBecomeFriends');

const cases = [
  {
    logs: [
      [20190101, 0, 1],
      [20190104, 3, 4],
      [20190107, 2, 3],
      [20190211, 1, 5],
      [20190224, 2, 4],
      [20190301, 0, 3],
      [20190312, 1, 2],
      [20190322, 4, 5],
    ],
    n: 6,
    output: 20190301,
  },
  {
    logs: [
      [0, 2, 0],
      [1, 0, 1],
      [3, 0, 3],
      [4, 1, 2],
      [7, 3, 1],
    ],
    n: 4,
    output: 3,
  },
  {
    logs: [
      [9, 3, 0],
      [0, 2, 1],
      [8, 0, 1],
      [1, 3, 2],
      [2, 2, 0],
      [3, 3, 1],
    ],
    n: 4,
    output: 2,
  },
  {
    logs: [
      [0, 0, 3],
      [2, 0, 2],
      [1, 3, 2],
      [3, 3, 1],
    ],
    n: 4,
    output: 3,
  },
];

test.each(cases)('earliestAcq', ({ logs, n, output }) => {
  expect(earliestAcq(logs, n)).toEqual(output);
});
