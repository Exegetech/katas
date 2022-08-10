const shortestPathBinaryMatrix = function (grid) {
  const firstRow = 0;
  const firstCol = 0;
  const lastRow = grid.length - 1;
  const lastCol = grid[grid.length - 1].length - 1;

  if (!(grid[firstRow][firstCol] === 0 && grid[lastRow][lastCol] === 0)) {
    return -1;
  }

  let steps = 0;

  const visited = new Set();
  visited.add('0-0');

  const queue = [{ row: 0, col: 0 }];

  while (queue.length > 0) {
    const qlen = queue.length;
    steps++;

    for (let i = 0; i < qlen; i++) {
      const cell = queue.shift();

      if (cell.row === lastRow && cell.col === lastCol) {
        return steps;
      }

      const neighbors = getNeighbors(grid, cell.row, cell.col);

      for (const n of neighbors) {
        if (!visited.has(`${n.row}-${n.col}`)) {
          visited.add(`${n.row}-${n.col}`);
          queue.push(n);
        }
      }
    }
  }

  return -1;
};

function getNeighbors(grid, row, col) {
  return [
    { row: row - 1, col: col - 1 },
    { row: row - 1, col: col + 1 },
    { row: row + 1, col: col - 1 },
    { row: row + 1, col: col + 1 },
    { row, col: col - 1 },
    { row, col: col + 1 },
    { row: row - 1, col },
    { row: row + 1, col },
  ].filter((n) => {
    return (
      n.row >= 0 &&
      n.row < grid.length &&
      n.col >= 0 &&
      n.col < grid[n.row].length &&
      grid[n.row][n.col] === 0
    );
  });
}

module.exports = { shortestPathBinaryMatrix };
