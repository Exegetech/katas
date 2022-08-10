const { maxArea } = require('../src/containerWithMostWater');

const cases = [
  {
    height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    output: 49,
  },
  {
    height: [1, 1],
    output: 1,
  },
];

test.each(cases)('maxArea', ({ height, output }) => {
  expect(maxArea(height)).toEqual(output);
});
