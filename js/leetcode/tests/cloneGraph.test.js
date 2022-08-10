const { cloneGraph } = require('../src/cloneGraph');
const { Node } = require('./helpers/node');

test('1', () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);

  node1.neighbors = [node2, node4];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];
  node4.neighbors = [node1, node3];

  const clonedNode1 = cloneGraph(node1);
  expect(clonedNode1.neighbors[0].val).toEqual(2);
  expect(clonedNode1.neighbors[1].val).toEqual(4);

  const clonedNode2 = clonedNode1.neighbors[0];
  expect(clonedNode2.neighbors[0].val).toEqual(1);
  expect(clonedNode2.neighbors[1].val).toEqual(3);

  const clonedNode3 = clonedNode2.neighbors[1];
  expect(clonedNode3.neighbors[0].val).toEqual(2);
  expect(clonedNode3.neighbors[1].val).toEqual(4);

  const clonedNode4 = clonedNode3.neighbors[1];
  expect(clonedNode4.neighbors[0].val).toEqual(1);
  expect(clonedNode4.neighbors[1].val).toEqual(3);
});
