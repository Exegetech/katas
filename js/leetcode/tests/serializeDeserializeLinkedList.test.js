const {
  serialize,
  deserialize,
} = require('../src/serializeDeserializeLinkedList');
const { ListNode } = require('./helpers/listNode');

test('1', () => {
  const node = null;
  const output = [];

  expect(serialize(node)).toEqual(output);
  expect(deserialize(output)).toEqual(node);
});

test('2', () => {
  const node = new ListNode(1);
  const output = [1];

  expect(serialize(node)).toEqual(output);
  expect(deserialize(output)).toEqual(node);
});

test('3', () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);

  node1.next = node2;
  node2.next = node3;

  const output = [1, 2, 3];

  expect(serialize(node1)).toEqual(output);

  const deserialized = deserialize(output);

  expect(deserialized.val).toEqual(node1.val);
  expect(deserialized.next.val).toEqual(node2.val);
  expect(deserialized.next.next.val).toEqual(node3.val);
  expect(deserialized.next.next.next).toEqual(null);
});
