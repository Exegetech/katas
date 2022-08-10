const { swapPairs } = require('../src/swapNodesInPairs');
const { ListNode } = require('./helpers/listNode');

test('1', () => {
  const result = swapPairs(null);

  expect(result).toEqual(null);
});

test('2', () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);

  node1.next = node2;
  node2.next = node3;

  const result = swapPairs(node1);

  expect(result.val).toEqual(2);
  expect(result.next.val).toEqual(1);
  expect(result.next.next.val).toEqual(3);
  expect(result.next.next.next).toEqual(null);
});

test('3', () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;

  const result = swapPairs(node1);

  expect(result.val).toEqual(2);
  expect(result.next.val).toEqual(1);
  expect(result.next.next.val).toEqual(4);
  expect(result.next.next.next.val).toEqual(3);
  expect(result.next.next.next.next).toEqual(null);
});
