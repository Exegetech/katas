const { removeNthFromEnd } = require('../src/removeNthNodeFromEndOfList');
const { deserialize, serialize } = require('./helpers/listNode');

test('1', () => {
  const head = deserialize([1, 2, 3, 4, 5]);
  const n = 2;
  const output = [1, 2, 3, 5];

  expect(serialize(removeNthFromEnd(head, n))).toEqual(output);
});

test('2', () => {
  const head = deserialize([1]);
  const n = 1;
  const output = [];

  expect(serialize(removeNthFromEnd(head, n))).toEqual(output);
});

test('3', () => {
  const head = deserialize([1, 2]);
  const n = 1;
  const output = [1];

  expect(serialize(removeNthFromEnd(head, n))).toEqual(output);
});

test('4', () => {
  const head = deserialize([1, 2]);
  const n = 2;
  const output = [2];

  expect(serialize(removeNthFromEnd(head, n))).toEqual(output);
});
