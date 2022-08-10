const { findOrder } = require('../src/courseScheduleII');

const cases = [
  {
    numCourses: 2,
    prerequisites: [[1, 0]],
    output: [0, 1],
  },
  {
    numCourses: 4,
    prerequisites: [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ],
    output: [0, 1, 2, 3],
  },
  {
    numCourses: 1,
    prerequisites: [],
    output: [0],
  },
  {
    numCourses: 3,
    prerequisites: [
      [1, 0],
      [1, 2],
      [0, 1],
    ],
    output: [],
  },
];

test.each(cases)('findOrder', ({ numCourses, prerequisites, output }) => {
  expect(findOrder(numCourses, prerequisites)).toEqual(output);
});
