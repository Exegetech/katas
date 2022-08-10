const setZeroes = function (matrix) {
  const rows = new Set();
  const cols = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        rows.add(row);
        cols.add(col);
      }
    }
  }

  const rowSet = Array.from(rows);
  rowSet.forEach((rowI) => {
    for (let col = 0; col < matrix[rowI].length; col++) {
      matrix[rowI][col] = 0;
    }
  });

  const colSet = Array.from(cols);
  colSet.forEach((colI) => {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][colI] = 0;
    }
  });
};

module.exports = { setZeroes };
