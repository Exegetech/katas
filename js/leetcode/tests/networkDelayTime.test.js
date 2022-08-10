const { networkDelayTime } = require('../src/networkDelayTime');

const cases = [
  {
    times: [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    n: 4,
    k: 2,
    output: 2,
  },
  {
    times: [[1, 2, 1]],
    n: 2,
    k: 1,
    output: 1,
  },
  {
    times: [[1, 2, 1]],
    n: 2,
    k: 2,
    output: -1,
  },
  {
    times: [
      [1, 2, 1],
      [2, 3, 2],
      [1, 3, 4],
    ],
    n: 3,
    k: 1,
    output: 3,
  },
];

test.each(cases)('networkDelayTime', ({ times, n, k, output }) => {
  expect(networkDelayTime(times, n, k)).toEqual(output);
});
