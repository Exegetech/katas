const kWeakestRows = function (mat, k) {
  const rows = [];
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    rows.push({
      index: i,
      soldiers: countSoldiers(row),
    });
  }

  rows.sort((r1, r2) => {
    if (r1.soldiers < r2.soldiers) {
      return -1;
    }

    if (r1.soldiers > r2.soldiers) {
      return 1;
    }

    return r1.index < r2.index ? -1 : 1;
  });

  const weakestIndices = [];
  for (let i = 0; i < k; i++) {
    weakestIndices.push(rows[i].index);
  }

  return weakestIndices;
};

function countSoldiers(row) {
  return row.reduce((el, acc) => {
    return el + acc;
  }, 0);
}

const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
const k = 3;

// const mat =
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]]
// const k = 2
console.log(kWeakestRows(mat, k));
