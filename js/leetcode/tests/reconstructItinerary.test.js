const { findItinerary } = require('../src/reconstructItinerary');

const cases = [
  {
    input: [],
    output: [],
  },
];

test.skip.each(cases)('findItinerary', ({ input, output }) => {
  expect(findItinerary(input)).toEqual(output);
});
