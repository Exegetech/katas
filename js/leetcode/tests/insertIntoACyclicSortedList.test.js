const { insert } = require('../src/insertIntoACyclicSortedList');
const { ListNode } = require('./helpers/listNode');

test('insert', () => {
  const node = null;
  const insertVal = 2;

  const output = insert(node, insertVal);

  expect(output.val).toBe(insertVal);
  expect(output.next.val).toBe(insertVal);
});

test('insert', () => {
  const node1 = new ListNode(1);
  node1.next = node1;
  const insertVal = 0;

  const output = insert(node1, insertVal);

  expect(output).toBe(node1);
  expect(output.next.val).toBe(insertVal);
  expect(output.next.next).toBe(node1);
});

test('insert', () => {
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);
  const node1 = new ListNode(1);

  node3.next = node4;
  node4.next = node1;
  node1.next = node3;

  const insertVal = 2;

  const output = insert(node3, insertVal);

  expect(output).toBe(node3);
  expect(output.next).toBe(node4);
  expect(output.next.next).toBe(node1);
  expect(output.next.next.next.val).toBe(insertVal);
  expect(output.next.next.next.next).toBe(node3);
});

test('insert', () => {
  const nodeA = new ListNode(3);
  const nodeB = new ListNode(3);
  const nodeC = new ListNode(3);

  nodeA.next = nodeB;
  nodeB.next = nodeC;
  nodeC.next = nodeA;

  const insertVal = 0;

  const output = insert(nodeA, insertVal);

  expect(output).toBe(nodeA);
  expect(output.next).toBe(nodeB);
  expect(output.next.next).toBe(nodeC);
  expect(output.next.next.next.val).toBe(insertVal);
  expect(output.next.next.next.next).toBe(nodeA);
});

test('insert', () => {
  const node1 = new ListNode(1);
  const node3 = new ListNode(3);
  const node5 = new ListNode(5);

  node1.next = node3;
  node3.next = node5;
  node5.next = node1;

  const insertVal = 0;

  const output = insert(node1, insertVal);

  expect(output).toBe(node1);
  expect(output.next).toBe(node3);
  expect(output.next.next).toBe(node5);
  expect(output.next.next.next.val).toBe(insertVal);
  expect(output.next.next.next.next).toBe(node1);
});

test('insert', () => {
  const node3 = new ListNode(3);
  const node5 = new ListNode(5);
  const node1 = new ListNode(1);

  node3.next = node5;
  node5.next = node1;
  node1.next = node3;

  const insertVal = 0;

  const output = insert(node3, insertVal);

  expect(output).toBe(node3);
  expect(output.next).toBe(node5);
  expect(output.next.next.val).toBe(insertVal);
  expect(output.next.next.next).toBe(node1);
  expect(output.next.next.next.next).toBe(node3);
});
