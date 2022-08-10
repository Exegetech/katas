const maxAreaOfIsland = function (grid) {
  const set = new Set();
  let maxArea = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        maxArea = Math.max(maxArea, traverse(grid, set, row, col));
      }
    }
  }

  return maxArea;
};

function traverse(grid, set, row, col) {
  let area = 0;
  const stack = [{ row, col }];
  set.add(`${row}-${col}`);

  while (stack.length > 0) {
    const node = stack.pop();
    area++;

    const neighbors = getNeighbors(node, grid);

    for (const n of neighbors) {
      if (!set.has(`${n.row}-${n.col}`)) {
        stack.push(n);
        set.add(`${n.row}-${n.col}`);
      }
    }
  }

  return area;
}

function getNeighbors(node, grid) {
  const { row, col } = node;
  const neighbors = [
    { row, col: col + 1 },
    { row, col: col - 1 },
    { row: row + 1, col },
    { row: row - 1, col },
  ];

  return neighbors.filter(({ row, col }) => {
    return (
      row >= 0 &&
      row < grid.length &&
      col >= 0 &&
      col < grid[row].length &&
      grid[row][col] === 1
    );
  });
}

module.exports = { maxAreaOfIsland };
