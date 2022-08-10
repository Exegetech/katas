const isValidSudoku = function (board) {
  return (
    checkAllRowValid(board) &&
    checkAllColValid(board) &&
    checkAllSectionValid(board)
  );
};

function checkAllRowValid(board) {
  for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
    const set = new Set();

    for (let colIdx = 0; colIdx < 9; colIdx++) {
      const cell = board[rowIdx][colIdx];

      if (cell !== '.') {
        if (set.has(cell)) {
          return false;
        }

        set.add(cell);
      }
    }
  }

  return true;
}

function checkAllColValid(board) {
  for (let colIdx = 0; colIdx < 9; colIdx++) {
    const set = new Set();

    for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
      const cell = board[rowIdx][colIdx];

      if (cell !== '.') {
        if (set.has(cell)) {
          return false;
        }

        set.add(cell);
      }
    }
  }

  return true;
}

function checkAllSectionValid(board) {
  const startCells = [
    { row: 0, col: 0 },
    { row: 0, col: 3 },
    { row: 0, col: 6 },
    { row: 3, col: 0 },
    { row: 3, col: 3 },
    { row: 3, col: 6 },
    { row: 6, col: 0 },
    { row: 6, col: 3 },
    { row: 6, col: 6 },
  ];

  for (let i = 0; i < startCells.length; i++) {
    const start = startCells[i];

    if (!checkSectionValid(board, start)) {
      return false;
    }
  }

  return true;
}

function checkSectionValid(board, start) {
  const set = new Set();

  for (let rowDiff = 0; rowDiff < 3; rowDiff++) {
    for (let colDiff = 0; colDiff < 3; colDiff++) {
      const cell = board[start.row + rowDiff][start.col + colDiff];

      if (cell !== '.') {
        if (set.has(cell)) {
          return false;
        }

        set.add(cell);
      }
    }
  }

  return true;
}

module.exports = { isValidSudoku };
