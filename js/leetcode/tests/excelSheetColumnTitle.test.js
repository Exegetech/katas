const { convertToTitle } = require('../src/excelSheetColumnTitle');

const cases = [
  {
    columnNumber: 1,
    output: 'A',
  },
  {
    columnNumber: 28,
    output: 'AB',
  },
  {
    columnNumber: 701,
    output: 'ZY',
  },
];

test.skip.each(cases)('convertToTitle', ({ columnNumber, output }) => {
  expect(convertToTitle(columnNumber)).toEqual(output);
});
