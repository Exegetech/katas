const { sortArray } = require('../src/sortAnArray');

test('1', () => {
  const arr = [];
  const output = [];

  expect(sortArray(arr)).toEqual(output);
});

test('2', () => {
  const arr = [10];
  const output = [10];

  expect(sortArray(arr)).toEqual(output);
});

test('3', () => {
  const arr = [10, 2, 5, 3];
  const output = [2, 3, 5, 10];

  expect(sortArray(arr)).toEqual(output);
});

test('4', () => {
  const arr = [10, 2, 5, 3, 1];
  const output = [1, 2, 3, 5, 10];

  expect(sortArray(arr)).toEqual(output);
});
