const { minimumSemesters } = require('../src/parallelCourses');

const cases = [
  {
    n: 3,
    relations: [
      [1, 3],
      [2, 3],
    ],
    output: 2,
  },
  {
    n: 3,
    relations: [
      [1, 2],
      [2, 3],
      [3, 1],
    ],
    output: -1,
  },
];

test.each(cases)('minimumSemesters', ({ n, relations, output }) => {
  expect(minimumSemesters(n, relations)).toEqual(output);
});
