const { middleNode } = require('../src/middleOfTheLinkedList');
const { ListNode } = require('./helpers/listNode');

test('middleNode', () => {
  const node1 = new ListNode(3);

  expect(middleNode(node1)).toBe(node1);
});

test('middleNode', () => {
  const node1 = new ListNode(3);
  const node2 = new ListNode(2);

  node1.next = node2;

  expect(middleNode(node1)).toBe(node2);
});

test('middleNode', () => {
  const node1 = new ListNode(3);
  const node2 = new ListNode(2);
  const node3 = new ListNode(0);

  node1.next = node2;
  node2.next = node3;

  expect(middleNode(node1)).toBe(node2);
});

test('middleNode', () => {
  const node1 = new ListNode(3);
  const node2 = new ListNode(2);
  const node3 = new ListNode(0);
  const node4 = new ListNode(-4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;

  expect(middleNode(node1)).toBe(node3);
});
