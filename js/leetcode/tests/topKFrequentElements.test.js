const { topKFrequent } = require('../src/topKFrequentElements');

test('1', () => {
  const nums = [1, 1, 1, 2, 2, 3];
  const k = 2;
  const output = [1, 2];

  expect(topKFrequent(nums, k)).toEqual(output);
});

test('2', () => {
  const nums = [1];
  const k = 1;
  const output = [1];

  expect(topKFrequent(nums, k)).toEqual(output);
});
