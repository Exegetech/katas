const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const kthSmallest = function (matrix, k) {
  const minQ = new MinPriorityQueue({
    priority: (el) => el.val,
  });

  for (let row = 0; row < matrix.length; row++) {
    const col = 0;
    minQ.enqueue({
      val: matrix[row][col],
      row,
      col,
    });
  }

  for (let i = 0; i < k; i++) {
    const smallest = minQ.dequeue().element;
    if (i === k - 1) {
      return smallest.val;
    }

    const nextRow = smallest.row;
    const nextCol = smallest.col + 1;

    if (nextCol === matrix[0].length) {
      continue;
    }

    const nextVal = matrix[nextRow][nextCol];

    minQ.enqueue({
      val: nextVal,
      row: nextRow,
      col: nextCol,
    });
  }
};

// const matrix = [
//   [1,5,9],
//   [10,11,13],
//   [12,13,15]
// ]
// const k = 8 // 13
// const matrix = [[-5]]
// const k = 1 // -5
// const matrix = [[1,2],[1,3]]
// const k = 2 // 1
const matrix = [
  [1, 2],
  [1, 3],
];
const k = 3; // 2
console.log(kthSmallest(matrix, k));
