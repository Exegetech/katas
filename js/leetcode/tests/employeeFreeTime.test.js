const { employeeFreeTime } = require('../src/employeeFreeTime');
const { Interval } = require('./helpers/interval');

const cases = [
  {
    schedule: [
      [
        [1, 2],
        [5, 6],
      ],
      [[1, 3]],
      [[4, 10]],
    ],
    output: [[3, 4]],
  },
  {
    schedule: [
      [
        [1, 3],
        [6, 7],
      ],
      [[2, 4]],
      [
        [2, 5],
        [9, 12],
      ],
    ],
    output: [
      [5, 6],
      [7, 9],
    ],
  },
];

test.each(cases)('employeeFreeTime', ({ schedule, output }) => {
  const _schedule = schedule.map((s) => {
    return s.map((i) => new Interval(i[0], i[1]));
  });

  const _output = employeeFreeTime(_schedule);
  const __output = _output.map((i) => [i.start, i.end]);

  expect(__output).toEqual(output);
});
