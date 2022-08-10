const { oddEvenList } = require('../src/oddEvenLinkedList');
const { deserialize, serialize } = require('./helpers/listNode');

test('oddEvenList', () => {
  const head = deserialize([1]);
  const output = [1];

  expect(serialize(oddEvenList(head))).toEqual(output);
});

test('oddEvenList', () => {
  const head = deserialize([1, 2]);
  const output = [1, 2];

  expect(serialize(oddEvenList(head))).toEqual(output);
});

test('oddEvenList', () => {
  const head = deserialize([1, 2, 3]);
  const output = [1, 3, 2];

  expect(serialize(oddEvenList(head))).toEqual(output);
});

test('oddEvenList', () => {
  const head = deserialize([1, 2, 3, 4]);
  const output = [1, 3, 2, 4];

  expect(serialize(oddEvenList(head))).toEqual(output);
});

test('oddEvenList', () => {
  const head = deserialize([1, 2, 3, 4, 5]);
  const output = [1, 3, 5, 2, 4];

  expect(serialize(oddEvenList(head))).toEqual(output);
});

test('oddEvenList', () => {
  const head = deserialize([2, 1, 3, 5, 6, 4, 7]);
  const output = [2, 3, 6, 7, 1, 5, 4];

  expect(serialize(oddEvenList(head))).toEqual(output);
});
