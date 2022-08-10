const { copyRandomList } = require('../src/copyListWithRandomPointers');
const { Node } = require('./helpers/randomNode');

test('copyRandomList', () => {
  const node7 = new Node(7);
  const node13 = new Node(13);
  const node11 = new Node(11);
  const node10 = new Node(10);
  const node1 = new Node(1);

  node7.next = node13;
  node13.next = node11;
  node11.next = node10;
  node10.next = node1;

  node13.random = node7;
  node11.random = node1;
  node10.random = node11;
  node1.random = node7;

  const output = copyRandomList(node7);

  expect(output).not.toBe(node7);
  expect(output.next).not.toBe(node13);
  expect(output.next.next).not.toBe(node11);
  expect(output.next.next.next).not.toBe(node10);
  expect(output.next.next.next.next).not.toBe(node1);

  expect(output.val).toBe(node7.val);
  expect(output.next.val).toBe(node13.val);
  expect(output.next.next.val).toBe(node11.val);
  expect(output.next.next.next.val).toBe(node10.val);
  expect(output.next.next.next.next.val).toBe(node1.val);

  expect(output.random).toBe(null);
  expect(output.next.random.val).toBe(node7.val);
  expect(output.next.next.random.val).toBe(node1.val);
  expect(output.next.next.next.random.val).toBe(node11.val);
  expect(output.next.next.next.next.random.val).toBe(node7.val);
});
