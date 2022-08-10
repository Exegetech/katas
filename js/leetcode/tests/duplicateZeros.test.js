const { duplicateZeros } = require('../src/duplicateZeros');

test('1', () => {
  const arr = [1, 0, 2, 3, 0, 4, 5, 0];
  const output = [1, 0, 0, 2, 3, 0, 0, 4];

  duplicateZeros(arr);

  expect(arr).toEqual(output);
});

test('2', () => {
  const arr = [1, 2, 3];
  const output = [1, 2, 3];

  duplicateZeros(arr);

  expect(arr).toEqual(output);
});

test('3', () => {
  const arr = [0, 0, 0, 0, 0, 0, 0];
  const output = [0, 0, 0, 0, 0, 0, 0];

  duplicateZeros(arr);

  expect(arr).toEqual(output);
});
