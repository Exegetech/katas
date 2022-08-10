const exist = function (board, word) {
  let found = false;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === word[0]) {
        const visited = new Set();
        const subResult = dfs(board, row, col, word, 0, visited);
        found = found || subResult;
      }
    }
  }

  return found;
};

function dfs(board, row, col, word, index, visited) {
  if (index === word.length - 1) {
    visited.add(`${row}-${col}`);
    const ch = word[index];
    return board[row][col] === ch;
  }

  visited.add(`${row}-${col}`);
  const ch = word[index];

  if (board[row][col] !== ch) {
    return false;
  }

  const neighbors = getNeighbors(board, row, col);

  let found = false;
  for (const n of neighbors) {
    if (!visited.has(`${n.row}-${n.col}`)) {
      const subResult = dfs(board, n.row, n.col, word, index + 1, visited);

      visited.delete(`${n.row}-${n.col}`);

      found = found || subResult;
    }
  }

  return found;
}

function getNeighbors(board, row, col) {
  const neighbors = [
    {
      row,
      col: col + 1,
    },
    {
      row,
      col: col - 1,
    },
    {
      row: row + 1,
      col,
    },
    {
      row: row - 1,
      col,
    },
  ];

  return neighbors.filter((n) => {
    return (
      n.row >= 0 &&
      n.row < board.length &&
      n.col >= 0 &&
      n.col < board[n.row].length
    );
  });
}

module.exports = { exist };
