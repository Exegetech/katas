const { construct } = require('../src/constructQuadTree');

test('constructQuadTree', () => {
  const grid = [
    [0, 1],
    [1, 0],
  ];

  const output = construct(grid);

  expect(output.val).toEqual(1);
  expect(output.isLeaf).toEqual(false);

  expect(output.topLeft.val).toEqual(0);
  expect(output.topLeft.isLeaf).toEqual(true);
  expect(output.topLeft.topLeft).toEqual(null);
  expect(output.topLeft.topRight).toEqual(null);
  expect(output.topLeft.bottomLeft).toEqual(null);
  expect(output.topLeft.bottomRight).toEqual(null);

  expect(output.topRight.val).toEqual(1);
  expect(output.topRight.isLeaf).toEqual(true);
  expect(output.topRight.topLeft).toEqual(null);
  expect(output.topRight.topRight).toEqual(null);
  expect(output.topRight.bottomLeft).toEqual(null);
  expect(output.topRight.bottomRight).toEqual(null);

  expect(output.bottomLeft.val).toEqual(1);
  expect(output.bottomLeft.isLeaf).toEqual(true);
  expect(output.bottomLeft.topLeft).toEqual(null);
  expect(output.bottomLeft.topRight).toEqual(null);
  expect(output.bottomLeft.bottomLeft).toEqual(null);
  expect(output.bottomLeft.bottomRight).toEqual(null);

  expect(output.bottomRight.val).toEqual(0);
  expect(output.bottomRight.isLeaf).toEqual(true);
  expect(output.bottomRight.topLeft).toEqual(null);
  expect(output.bottomRight.topRight).toEqual(null);
  expect(output.bottomRight.bottomLeft).toEqual(null);
  expect(output.bottomRight.bottomRight).toEqual(null);
});
