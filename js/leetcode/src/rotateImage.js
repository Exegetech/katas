const rotate = function (matrix) {
  flipDiagonal(matrix);
  reverseCol(matrix);
};

function flipDiagonal(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col <= row; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
}

function reverseCol(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row].reverse();
  }
}

module.exports = { rotate };
