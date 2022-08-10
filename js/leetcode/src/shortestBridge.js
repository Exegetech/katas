const shortestBridge = function (grid) {
  const visited = new Set();
  const islands = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1 && !visited.has(`${row}-${col}`)) {
        const coords = collectCoordinate(visited, grid, row, col);
        islands.push(coords);
      }
    }
  }

  return getShortestManhattanDistance(islands);
};

function collectCoordinate(visited, grid, row, col) {
  const coordinates = [];
  const stack = [{ row, col }];

  while (stack.length > 0) {
    const curr = stack.pop();
    if (visited.has(`${curr.row}-${curr.col}`)) {
      continue;
    }

    visited.add(`${curr.row}-${curr.col}`);
    coordinates.push(curr);

    const neighbors = getNeighbors(grid, curr.row, curr.col);

    for (const n of neighbors) {
      stack.push(n);
    }
  }

  return coordinates;
}

function getNeighbors(grid, row, col) {
  return [
    { row, col: col + 1 },
    { row, col: col - 1 },
    { row: row + 1, col },
    { row: row - 1, col },
  ].filter((n) => {
    return (
      n.row >= 0 &&
      n.row < grid.length &&
      n.col >= 0 &&
      n.col < grid[n.row].length &&
      grid[n.row][n.col] === 1
    );
  });
}

function getShortestManhattanDistance(islands) {
  let min = Number.POSITIVE_INFINITY;

  islands[0].forEach((c1) => {
    islands[1].forEach((c2) => {
      const distance = getManhattanDistance(c1, c2);
      min = Math.min(distance, min);
    });
  });

  return min;
}

function getManhattanDistance(c1, c2) {
  const rows = Math.abs(c1.row - c2.row) - 1;
  const cols = Math.abs(c1.col - c2.col) - 1;

  return rows + cols + 1;
}

module.exports = { shortestBridge };
