const matrixReshape = function (mat, r, c) {
  const oldArea = mat.length * mat[0].length;
  const newArea = r * c;

  if (oldArea !== newArea) {
    return mat;
  }

  const newMatrix = new Array(r).fill(0).map(() => new Array(c).fill(0));
  let cellCount = 0;

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[row].length; col++) {
      const num = mat[row][col];

      const newRow = Math.floor(cellCount / c);
      const newCol = cellCount % c;

      newMatrix[newRow][newCol] = num;

      cellCount++;
    }
  }

  return newMatrix;
};

module.exports = { matrixReshape };
