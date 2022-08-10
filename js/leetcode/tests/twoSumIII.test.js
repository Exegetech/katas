const { TwoSum } = require('../src/twoSumIII');

test('1', () => {
  const twoSum = new TwoSum();
  twoSum.add(1);
  twoSum.add(3);
  twoSum.add(5);
  expect(twoSum.find(4)).toEqual(true);
  expect(twoSum.find(7)).toEqual(false);
});
