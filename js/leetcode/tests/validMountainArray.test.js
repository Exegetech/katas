const { validMountainArray } = require('../src/validMountainArray');

test('1', () => {
  const arr = [2, 1];
  expect(validMountainArray(arr)).toEqual(false);
});

test('2', () => {
  const arr = [3, 5, 5];
  expect(validMountainArray(arr)).toEqual(false);
});

test('3', () => {
  const arr = [3, 5, 4];
  expect(validMountainArray(arr)).toEqual(true);
});

test('4', () => {
  const arr = [0, 3, 2, 1];
  expect(validMountainArray(arr)).toEqual(true);
});

test('5', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(validMountainArray(arr)).toEqual(false);
});
