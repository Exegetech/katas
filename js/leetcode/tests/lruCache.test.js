const { LRUCache } = require('../src/lruCache');

test('LRUCache', () => {
  const lRUCache = new LRUCache(2);

  lRUCache.put(1, 1);
  lRUCache.put(2, 2);
  expect(lRUCache.get(1)).toEqual(1);
  lRUCache.put(3, 3);
  expect(lRUCache.get(2)).toEqual(-1);
  lRUCache.put(4, 4);
  expect(lRUCache.get(1)).toEqual(-1);
  expect(lRUCache.get(3)).toEqual(3);
  expect(lRUCache.get(4)).toEqual(4);
});

test('LRUCache', () => {
  const lRUCache = new LRUCache(2);

  lRUCache.put(2, 1);
  lRUCache.put(2, 2);
  expect(lRUCache.get(2)).toEqual(2);
  lRUCache.put(1, 1);
  lRUCache.put(4, 1);
  expect(lRUCache.get(2)).toEqual(-1);
});

test.only('LRUCache', () => {
  const lRUCache = new LRUCache(1);

  lRUCache.put(2, 1);
  expect(lRUCache.get(2)).toEqual(1);
  lRUCache.put(3, 2);
  expect(lRUCache.get(2)).toEqual(-1);
  expect(lRUCache.get(3)).toEqual(2);
});
