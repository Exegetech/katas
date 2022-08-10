const { dungeonGame } = require('../src/dungeonGame');

const cases = [
  {
    input: [],
    output: [],
  },
];

test.skip.each(cases)('dungeonGame', ({ input, output }) => {
  expect(dungeonGame(input)).toEqual(output);
});
