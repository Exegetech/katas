const { findDuplicate } = require('../src/findTheDuplicateNumber');

test.skip('findDuplicate', () => {
  const nums = [1, 3, 4, 2, 2];
  const output = 2;

  expect(findDuplicate(nums)).toEqual(output);
});

test.skip('findDuplicate', () => {
  const nums = [3, 1, 3, 4, 2];
  const output = 3;

  expect(findDuplicate(nums)).toEqual(output);
});
