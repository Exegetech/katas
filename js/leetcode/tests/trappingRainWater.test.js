const { trap } = require('../src/trappingRainWater');

const cases = [
  {
    height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
    output: 6,
  },
  {
    height: [4, 2, 0, 3, 2, 5],
    output: 9,
  },
];

test.each(cases)('trap', ({ height, output }) => {
  expect(trap(height)).toEqual(output);
});
