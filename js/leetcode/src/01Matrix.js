const updateMatrix = function (mat) {
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[row].length; col++) {
      if (mat[row][col] !== 0) {
        const min = findMinimumNeighbor(mat, row, col);
        mat[row][col] = 1 + min;
      }
    }
  }

  return mat;
};

function findMinimumNeighbor(mat, row, col) {
  const neighbors = [
    { row, col: col + 1 },
    { row, col: col - 1 },
    { row: row + 1, col },
    { row: row - 1, col },
  ];

  let min = Number.POSITIVE_INFINITY;
  for (const n of neighbors) {
    if (
      n.row >= 0 &&
      n.row < mat.length &&
      n.col >= 0 &&
      n.col < mat[n.row].length
    ) {
      min = Math.min(min, mat[n.row][n.col]);
    }
  }

  return min;
}

module.exports = { updateMatrix };
