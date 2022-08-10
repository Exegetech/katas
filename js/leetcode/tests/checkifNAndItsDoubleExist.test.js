const { checkIfExist } = require('../src/checkIfNAndItsDoubleExist');

test('1', () => {
  const arr = [10, 2, 5, 3];

  expect(checkIfExist(arr)).toEqual(true);
});

test('2', () => {
  const arr = [7, 1, 14, 11];

  expect(checkIfExist(arr)).toEqual(true);
});

test('3', () => {
  const arr = [3, 1, 7, 11];

  expect(checkIfExist(arr)).toEqual(false);
});
