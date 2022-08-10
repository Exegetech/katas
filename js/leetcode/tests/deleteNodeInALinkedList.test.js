const { deleteNode } = require('../src/deleteNodeInALinkedList');
const { ListNode, serialize } = require('./helpers/listNode');

test('deleteNode', () => {
  const n4 = new ListNode(4);
  const n5 = new ListNode(5);
  const n1 = new ListNode(1);
  const n9 = new ListNode(9);

  n4.next = n5;
  n5.next = n1;
  n1.next = n9;

  deleteNode(n5);

  const serialized = serialize(n4);
  const output = [4, 1, 9];

  expect(serialized).toEqual(output);
});
