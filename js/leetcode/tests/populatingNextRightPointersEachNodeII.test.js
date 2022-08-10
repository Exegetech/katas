const { connect } = require('../src/populatingNextRightPointersEachNodeII');
const { Node } = require('./helpers/nodeWithNext');

test('1', () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const node7 = new Node(7);

  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.right = node7;

  connect(node1);

  expect(node2.next.val).toEqual(node3.val);
  expect(node3.next).toEqual(null);
  expect(node4.next.val).toEqual(node5.val);
  expect(node5.next.val).toEqual(node7.val);
  expect(node7.next).toEqual(null);
});

test('2', () => {
  const root = null;
  const output = null;

  expect(connect(root)).toEqual(output);
});
