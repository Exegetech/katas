const longestIncreasingPath = function (matrix) {
  let max = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const result = dfs(matrix, row, col);
      max = Math.max(max, result);
    }
  }

  return max;
};

function dfs(matrix, row, col) {
  const neighbors = getNeighbors(matrix, row, col);

  let max = 0;
  for (const n of neighbors) {
    if (matrix[n.row][n.col] > matrix[row][col]) {
      const subResult = dfs(matrix, n.row, n.col);
      max = Math.max(max, subResult);
    }
  }

  return 1 + max;
}

function getNeighbors(matrix, row, col) {
  return [
    { row, col: col + 1 },
    { row, col: col - 1 },
    { row: row + 1, col },
    { row: row - 1, col },
  ].filter(
    ({ row, col }) =>
      row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length
  );
}

module.exports = { longestIncreasingPath };
