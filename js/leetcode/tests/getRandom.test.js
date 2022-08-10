const { RandomizedSet } = require('../src/getRandom');

test('RandomizedSet', () => {
  const randomizedSet = new RandomizedSet();

  expect(randomizedSet.insert(1)).toEqual(true);
  expect(randomizedSet.remove(2)).toEqual(false);
  expect(randomizedSet.insert(2)).toEqual(true);
  expect(randomizedSet.getRandom()).toBeOneOf([1, 2]);
  expect(randomizedSet.remove(1)).toEqual(true);
  expect(randomizedSet.insert(2)).toEqual(false);
  expect(randomizedSet.getRandom()).toEqual(2);
});
