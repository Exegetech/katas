const findDiagonalOrder = function (mat) {
  const cols = mat[0].length;
  const result = [];

  let down = false;

  for (let col = 0; col < cols; col++) {
    const temp = [];
    let cellRow = 0;
    let cellCol = col;

    while (cellRow < mat.length && cellCol >= 0) {
      temp.push(mat[cellRow][cellCol]);
      cellRow++;
      cellCol--;
    }

    if (down) {
      result.push(temp);
    } else {
      result.push(temp.reverse());
    }

    down = !down;
  }

  for (let row = 1; row < mat.length; row++) {
    const temp = [];
    let cellRow = row;
    let cellCol = mat[0].length - 1;

    while (cellRow < mat.length && cellCol >= 0) {
      temp.push(mat[cellRow][cellCol]);
      cellRow++;
      cellCol--;
    }

    if (down) {
      result.push(temp);
    } else {
      result.push(temp.reverse());
    }

    down = !down;
  }

  return result.reduce((acc, el) => acc.concat(el), []);
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// const mat = [[1,2],[3,4]]
// const mat = [[3],[2]]

console.log(findDiagonalOrder(mat));
