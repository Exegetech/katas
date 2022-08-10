const maximalSquare = function (matrix) {
  const maxLengthDict = {};

  recurse(matrix, maxLengthDict, matrix.length - 1, matrix[0].length - 1);

  const maxLength = Object.values(maxLengthDict).reduce(
    (acc, el) => Math.max(acc, el),
    0
  );

  return Math.pow(maxLength, 2);
};

function recurse(matrix, maxLengthDict, row, col) {
  if (row < 0 || col < 0) {
    return 0;
  }

  const hash = `${row}-${col}`;

  if (typeof maxLengthDict[hash] !== 'undefined') {
    return maxLengthDict[hash];
  }

  if (matrix[row][col] === '0') {
    maxLengthDict[hash] = 0;

    recurse(matrix, maxLengthDict, row - 1, col);

    recurse(matrix, maxLengthDict, row - 1, col - 1);

    recurse(matrix, maxLengthDict, row, col - 1);
  } else {
    const maxTopCellLength = recurse(matrix, maxLengthDict, row - 1, col);

    const maxTopLeftCellLength = recurse(
      matrix,
      maxLengthDict,
      row - 1,
      col - 1
    );

    const maxLeftCellLength = recurse(matrix, maxLengthDict, row, col - 1);

    maxLengthDict[hash] =
      1 + Math.min(maxTopCellLength, maxTopLeftCellLength, maxLeftCellLength);
  }

  return maxLengthDict[hash];
}

const maximalSquare2 = function (matrix) {
  const memo = new Array(matrix.length)
    .fill(0)
    .map((el) => new Array(matrix[0].length).fill(0));

  let maxLength = 0;

  // Fill row zero
  for (let col = 0; col < memo[0].length; col++) {
    memo[0][col] = matrix[0][col] === '0' ? 0 : 1;
    maxLength = Math.max(maxLength, memo[0][col]);
  }

  // Fill col zero
  for (let row = 0; row < memo.length; row++) {
    memo[row][0] = matrix[row][0] === '0' ? 0 : 1;
    maxLength = Math.max(maxLength, memo[row][0]);
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[row].length; col++) {
      if (matrix[row][col] === '1') {
        const maxTopCellLength = memo[row - 1][col];
        const maxTopLeftCellLength = memo[row - 1][col - 1];
        const maxLeftCellLength = memo[row][col - 1];

        memo[row][col] =
          1 +
          Math.min(maxTopCellLength, maxTopLeftCellLength, maxLeftCellLength);

        maxLength = Math.max(maxLength, memo[row][col]);
      }
    }
  }

  return Math.pow(maxLength, 2);
};

module.exports = {
  maximalSquare,
  maximalSquare2,
};
