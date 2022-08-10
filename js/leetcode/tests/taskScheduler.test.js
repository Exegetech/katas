const { leastInterval } = require('../src/taskScheduler');

const cases = [
  {
    tasks: ['A', 'A', 'A', 'B', 'B', 'B'],
    n: 2,
    output: 8,
  },
  {
    tasks: ['A', 'A', 'A', 'B', 'B', 'B'],
    n: 0,
    output: 6,
  },
  {
    tasks: ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    n: 2,
    output: 16,
  },
  {
    tasks: ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'],
    n: 2,
    output: 12,
  },
];

test.skip.each(cases)('leastInterval', ({ tasks, n, output }) => {
  expect(leastInterval(tasks, n)).toEqual(output);
});
