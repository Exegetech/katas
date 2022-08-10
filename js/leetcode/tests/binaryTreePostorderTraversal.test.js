const { postorderTraversal } = require('../src/binaryTreePostorderTraversal');
const { deserialize } = require('./helpers/treeNode');

test.skip('1', () => {
  const root = deserialize([1, null, 2, 3]);
  const output = [3, 2, 1];

  expect(postorderTraversal(root)).toEqual(output);
});

// test('2', () => {
//   const root = deserialize([])
//   const output = []

//   expect(postorderTraversal(root)).toEqual(output)
// })

// test('3', () => {
//   const root = deserialize([1])
//   const output = [1]

//   expect(postorderTraversal(root)).toEqual(output)
// })

// test('4', () => {
//   const root = deserialize([1,null,2,3])
//   const output = [3,2,1]

//   expect(postorderTraversal2(root)).toEqual(output)
// })

// test('5', () => {
//   const root = deserialize([])
//   const output = []

//   expect(postorderTraversal2(root)).toEqual(output)
// })

// test('6', () => {
//   const root = deserialize([1])
//   const output = [1]

//   expect(postorderTraversal2(root)).toEqual(output)
// })
