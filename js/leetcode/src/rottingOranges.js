const orangesRotting = function (grid) {
  const initialRottenOranges = getRottenOranges(grid);
  const initialFreshOranges = getFreshOranges(grid);

  if (initialFreshOranges.length === 0 && initialRottenOranges.length === 0) {
    return 0;
  }

  if (initialFreshOranges.length > 0 && initialRottenOranges.length === 0) {
    return -1;
  }

  const queue = [];

  initialRottenOranges.forEach(({ row, col }) => {
    queue.push({ row, col });
  });

  let time = -1;

  while (queue.length > 0) {
    const qlen = queue.length;
    time++;

    for (let i = 0; i < qlen; i++) {
      const cell = queue.shift();

      const freshNeighbors = getFreshNeighbors(grid, cell.row, cell.col);

      for (const n of freshNeighbors) {
        grid[n.row][n.col] = 2;
        queue.push(n);
      }
    }
  }

  const freshOranges = getFreshOranges(grid);

  if (freshOranges.length === 0) {
    return time;
  }

  return -1;
};

function getRottenOranges(grid) {
  const rottenOranges = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 2) {
        rottenOranges.push({ row, col });
      }
    }
  }

  return rottenOranges;
}

function getFreshOranges(grid) {
  const freshOranges = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        freshOranges.push({ row, col });
      }
    }
  }

  return freshOranges;
}

function getFreshNeighbors(grid, row, col) {
  return [
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
      grid[n.row][n.col] === 1
    );
  });
}

module.exports = { orangesRotting };
