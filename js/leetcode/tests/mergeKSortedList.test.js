const { mergeKLists } = require('../src/mergeKSortedList');
const { serialize, deserialize } = require('./helpers/listNode');

test('mergeKLists', () => {
  const lists = [
    deserialize([1, 4, 5]),
    deserialize([1, 3, 4]),
    deserialize([2, 6]),
  ];

  const output = [1, 1, 2, 3, 4, 4, 5, 6];

  expect(serialize(mergeKLists(lists))).toEqual(output);
});

test('mergeKLists', () => {
  const lists = [];
  const output = [];

  expect(serialize(mergeKLists(lists))).toEqual(output);
});

test('mergeKLists', () => {
  const lists = [deserialize([])];
  const output = [];

  expect(serialize(mergeKLists(lists))).toEqual(output);
});
