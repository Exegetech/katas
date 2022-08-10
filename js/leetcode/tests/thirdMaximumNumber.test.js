const { thirdMax } = require('../src/thirdMaximumNumber');

test('1', () => {
  const nums = [3, 2, 1];
  const output = 1;

  expect(thirdMax(nums)).toEqual(output);
});

test('2', () => {
  const nums = [1, 2];
  const output = 2;

  expect(thirdMax(nums)).toEqual(output);
});

test('3', () => {
  const nums = [2, 2, 3, 1];
  const output = 1;

  expect(thirdMax(nums)).toEqual(output);
});
