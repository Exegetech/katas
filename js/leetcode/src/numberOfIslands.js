const numIslands = function (grid) {
  let numIslands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        traverse(grid, row, col);
        numIslands++;
      }
    }
  }

  return numIslands;
};

function traverse(grid, row, col) {
  const queue = [];
  const visited = {};
  queue.push({ row, col });
  visited[`row${row}-col${col}`] = true;

  while (queue.length > 0) {
    const qSize = queue.length;

    for (let i = 0; i < qSize; i++) {
      const node = queue.shift();
      grid[node.row][node.col] = '0';

      const neighbors = getNeighbors(grid, node.row, node.col);

      for (const n of neighbors) {
        const key = `row${n.row}-col${n.col}`;

        if (!visited[key]) {
          queue.push({
            row: n.row,
            col: n.col,
          });
          visited[key] = true;
        }
      }
    }
  }
}

function getNeighbors(grid, row, col) {
  const neighbors = [];

  const top = row - 1;
  if (top >= 0 && grid[top][col] === '1') {
    neighbors.push({ row: top, col });
  }

  const bot = row + 1;
  if (bot < grid.length && grid[bot][col] === '1') {
    neighbors.push({ row: bot, col });
  }

  const left = col - 1;
  if (left >= 0 && grid[row][left] === '1') {
    neighbors.push({ row, col: left });
  }

  const right = col + 1;
  if (right < grid[row].length && grid[row][right] === '1') {
    neighbors.push({ row, col: right });
  }

  return neighbors;
}

module.exports = { numIslands };
