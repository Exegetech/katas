const { containsDuplicate } = require('../src/containsDuplicate');

test('1', () => {
  const nums = [1, 2, 3, 1];
  const output = true;

  expect(containsDuplicate(nums)).toEqual(output);
});

test('2', () => {
  const nums = [1, 2, 3, 4];
  const output = false;

  expect(containsDuplicate(nums)).toEqual(output);
});

test('3', () => {
  const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
  const output = true;

  expect(containsDuplicate(nums)).toEqual(output);
});
