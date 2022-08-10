const {
  serialize,
  deserialize,
  serialize2,
  deserialize2,
} = require('../src/serializeDeserializeBinaryTree');
const { TreeNode } = require('./helpers/treeNode');

test('1', () => {
  const node1 = null;
  const output = 'null';

  expect(serialize(node1)).toEqual(output);
  expect(deserialize(output)).toEqual(node1);
});

test('2', () => {
  const node1 = new TreeNode(1);
  const output = '1,null,null';

  expect(serialize(node1)).toEqual(output);
  expect(deserialize(output)).toEqual(node1);
});

test('3', () => {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);

  node1.left = node2;
  node1.right = node3;

  const output = '1,2,null,null,3,null,null';

  expect(serialize(node1)).toEqual(output);

  const deserialized = deserialize(output);

  expect(deserialized.val).toEqual(node1.val);
  expect(deserialized.left.val).toEqual(node2.val);
  expect(deserialized.left.left).toEqual(null);
  expect(deserialized.left.right).toEqual(null);
  expect(deserialized.right.val).toEqual(node3.val);
  expect(deserialized.right.left).toEqual(null);
  expect(deserialized.right.right).toEqual(null);
});

test('4', () => {
  const node1 = null;
  const output = [];

  expect(serialize2(node1)).toEqual(output);
  expect(deserialize2(output)).toEqual(node1);
});

test('5', () => {
  const node1 = new TreeNode(1);
  const output = [1];

  expect(serialize2(node1)).toEqual(output);
  expect(deserialize2(output)).toEqual(node1);
});

test('6', () => {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);

  node1.left = node2;
  node1.right = node3;

  const output = [1, 2, 3];

  expect(serialize2(node1)).toEqual(output);

  const deserialized = deserialize2(output);

  expect(deserialized.val).toEqual(node1.val);
  expect(deserialized.left.val).toEqual(node2.val);
  expect(deserialized.left.left).toEqual(null);
  expect(deserialized.left.right).toEqual(null);
  expect(deserialized.right.val).toEqual(node3.val);
  expect(deserialized.right.left).toEqual(null);
  expect(deserialized.right.right).toEqual(null);
});
