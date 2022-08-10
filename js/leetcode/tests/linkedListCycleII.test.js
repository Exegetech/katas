const { detectCycle } = require('../src/linkedListCycleII');
const { ListNode } = require('./helpers/listNode');

test('1', () => {
  const node1 = new ListNode(3);
  const node2 = new ListNode(2);
  const node3 = new ListNode(0);
  const node4 = new ListNode(-4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2;

  expect(detectCycle(node1)).toBe(node2);
});

test('2', () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);

  node1.next = node2;

  expect(detectCycle(node1)).toBe(null);
});

test('3', () => {
  const node1 = new ListNode(1);

  expect(detectCycle(node1)).toEqual(null);
});
