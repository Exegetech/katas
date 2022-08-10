const { reverseList, reverseList2 } = require('../src/reverseLinkedList');
const { deserialize, serialize } = require('./helpers/listNode');

test('reverseList', () => {
  const head = deserialize([]);
  const output = [];

  expect(serialize(reverseList(head))).toEqual(output);
});

test('reverseList', () => {
  const head = deserialize([1]);
  const output = [1];

  expect(serialize(reverseList(head))).toEqual(output);
});

test('reverseList', () => {
  const head = deserialize([1, 2]);
  const output = [2, 1];

  expect(serialize(reverseList(head))).toEqual(output);
});

test('reverseList', () => {
  const head = deserialize([1, 2, 3]);
  const output = [3, 2, 1];

  expect(serialize(reverseList(head))).toEqual(output);
});

test('reverseList', () => {
  const head = deserialize([1, 2, 3, 4]);
  const output = [4, 3, 2, 1];

  expect(serialize(reverseList(head))).toEqual(output);
});

test('reverseList2', () => {
  const head = deserialize([]);
  const output = [];

  expect(serialize(reverseList(head))).toEqual(output);
});

test('reverseList2', () => {
  const head = deserialize([1]);
  const output = [1];

  expect(serialize(reverseList(head))).toEqual(output);
});

test('reverseList2', () => {
  const head = deserialize([1, 2]);
  const output = [2, 1];

  expect(serialize(reverseList(head))).toEqual(output);
});

test('reverseList2', () => {
  const head = deserialize([1, 2, 3]);
  const output = [3, 2, 1];

  expect(serialize(reverseList(head))).toEqual(output);
});

test('reverseList2', () => {
  const head = deserialize([1, 2, 3, 4]);
  const output = [4, 3, 2, 1];

  expect(serialize(reverseList(head))).toEqual(output);
});
