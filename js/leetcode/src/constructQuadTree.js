const { Node } = require('../tests/helpers/quadTreeNode');

const construct = function (grid) {
  return make(grid, 0, 0, grid.length);
};

function make(grid, startRow, startCol, length) {
  if (length === 1) {
    const val = grid[startRow][startCol];
    const isLeaf = true;

    return new Node(val, isLeaf, null, null, null, null);
  }

  const nextLength = Math.floor(length / 2);

  const topLeft = make(grid, startRow, startCol, nextLength);

  const topRight = make(grid, startRow, startCol + nextLength, nextLength);

  const bottomLeft = make(grid, startRow + nextLength, startCol, nextLength);

  const bottomRight = make(
    grid,
    startRow + nextLength,
    startCol + nextLength,
    nextLength
  );

  if (
    sameValue(topLeft, topRight, bottomLeft, bottomRight) &&
    allLeaf(topLeft, topRight, bottomLeft, bottomRight)
  ) {
    const val = topLeft.val;
    const isLeaf = true;

    return new Node(val, isLeaf, null, null, null, null);
  }

  return new Node(
    1, // Can be any value
    false,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
  );
}

function sameValue(topLeft, topRight, bottomLeft, bottomRight) {
  return (
    topLeft.val === topRight.val &&
    bottomLeft.val === bottomRight.val &&
    topLeft.val === bottomLeft.val
  );
}

function allLeaf(topLeft, topRight, bottomLeft, bottomRight) {
  return (
    topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf
  );
}

module.exports = { construct };
