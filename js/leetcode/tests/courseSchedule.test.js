const { canFinish } = require('../src/courseSchedule');

const cases = [
  {
    numCourses: 2,
    prerequisites: [[1, 0]],
    output: true,
  },
  {
    numCourses: 2,
    prerequisites: [
      [1, 0],
      [0, 1],
    ],
    output: false,
  },
];

test.each(cases)('canFinish', ({ numCourses, prerequisites, output }) => {
  expect(canFinish(numCourses, prerequisites)).toEqual(output);
});
