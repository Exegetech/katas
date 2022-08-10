const printTree = function (root) {
  const height = getTreeHeight(root);
  const m = height + 1;
  const n = Math.pow(2, height + 1) - 1;

  const matrix = buildMatrix(m, n);

  const row = 0;
  const col = Math.floor((n - 1) / 2);

  recurse(matrix, root, height, row, col);

  return matrix;
};

function getTreeHeight(node) {
  if (node === null) {
    return -1;
  }

  const left = getTreeHeight(node.left);
  const right = getTreeHeight(node.right);

  return 1 + Math.max(left, right);
}

function buildMatrix(m, n) {
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(''));

  return matrix;
}

function recurse(matrix, node, height, row, col) {
  if (node === null) {
    return;
  }

  matrix[row][col] = node.val.toString();

  const leftNode = node.left;
  const leftRow = row + 1;
  const leftCol = col - Math.pow(2, height - row - 1);

  recurse(matrix, leftNode, height, leftRow, leftCol);

  const rightNode = node.right;
  const rightRow = row + 1;
  const rightCol = col + Math.pow(2, height - row - 1);

  recurse(matrix, rightNode, height, rightRow, rightCol);
}

module.exports = { printTree };
