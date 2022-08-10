const searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    const row = Math.floor(mid / cols);
    const col = mid % cols;

    if (target === matrix[row][col]) {
      return true;
    }

    if (target > matrix[row][col]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

module.exports = { searchMatrix };
