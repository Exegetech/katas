const { inorderTraversal } = require('../src/binaryTreeInorderTraversal');
const { deserialize } = require('./helpers/treeNode');

test.skip('1', () => {
  const root = deserialize([1, null, 2, 3]);
  const output = [1, 3, 2];

  expect(inorderTraversal(root)).toEqual(output);
});

// test('2', () => {
//   const root = deserialize([])
//   const output = []

//   expect(inorderTraversal(root)).toEqual(output)
// })

// test('3', () => {
//   const root = deserialize([1])
//   const output = [1]

//   expect(inorderTraversal(root)).toEqual(output)
// })

// test('4', () => {
//   const root = deserialize([1,null,2,3])
//   const output = [1,3,2]

//   expect(inorderTraversal2(root)).toEqual(output)
// })

// test('5', () => {
//   const root = deserialize([])
//   const output = []

//   expect(inorderTraversal2(root)).toEqual(output)
// })

// test('6', () => {
//   const root = deserialize([1])
//   const output = [1]

//   expect(inorderTraversal2(root)).toEqual(output)
// })
