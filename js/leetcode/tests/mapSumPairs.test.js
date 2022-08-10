const { MapSum } = require('../src/mapSumPairs');

test('MapSum', () => {
  const mapSum = new MapSum();

  mapSum.insert('apple', 3);
  expect(mapSum.sum('ap')).toBe(3);
  mapSum.insert('app', 2);
  expect(mapSum.sum('ap')).toBe(5);
});

test('MapSum', () => {
  const mapSum = new MapSum();

  mapSum.insert('a', 3);
  expect(mapSum.sum('ap')).toBe(0);
  mapSum.insert('b', 2);
  expect(mapSum.sum('a')).toBe(3);
});
