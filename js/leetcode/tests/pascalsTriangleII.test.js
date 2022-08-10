const { getRow } = require('../src/pascalsTriangleII');

test('1', () => {
  const rowIndex = 3;
  const output = [1, 3, 3, 1];

  expect(getRow(rowIndex)).toEqual(output);
});

test('2', () => {
  const rowIndex = 0;
  const output = [1];

  expect(getRow(rowIndex)).toEqual(output);
});

test('3', () => {
  const rowIndex = 1;
  const output = [1, 1];

  expect(getRow(rowIndex)).toEqual(output);
});
