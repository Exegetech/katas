const spiralOrder = function (matrix) {
  const result = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const total = rows * cols;

  let left = 0;
  let top = 0;
  let right = cols - 1;
  let bot = rows - 1;

  let direction = 'right';

  while (result.length < total) {
    if (direction === 'right') {
      for (let col = left; col <= right; col++) {
        result.push(matrix[top][col]);
      }

      top++;
      direction = 'bot';
    } else if (direction === 'bot') {
      for (let row = top; row <= bot; row++) {
        result.push(matrix[row][right]);
      }

      right--;
      direction = 'left';
    } else if (direction === 'left') {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bot][col]);
      }

      bot--;
      direction = 'top';
    } else if (direction === 'top') {
      for (let row = bot; row >= top; row--) {
        result.push(matrix[row][left]);
      }

      left++;
      direction = 'right';
    }
  }

  return result;
};

module.exports = { spiralOrder };
