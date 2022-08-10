const maxPoints = function (points) {
  let max = 0;
  let lastCol = -1;

  for (let row = 0; row < points.length; row++) {
    if (row === 0) {
      const { maxVal, maxIdx } = findMax(points[row]);

      console.log(maxVal, maxIdx);

      max += maxVal;
      lastCol = maxIdx;

      continue;
    }

    const { bestNextVal, bestNextCol } = findBestNextCol(lastCol, points[row]);

    const profit = bestNextVal - Math.abs(lastCol - bestNextCol);

    console.log({
      bestNextVal,
      bestNextCol,
      profit,
    });

    max += profit;
    lastCol = bestNextCol;
  }

  return max;
};

function findMax(arr) {
  let maxVal = Number.NEGATIVE_INFINITY;
  let maxIdx = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
      maxIdx = i;
    }
  }

  return { maxVal, maxIdx };
}

function findBestNextCol(lastCol, arr) {
  let bestNextVal = Number.NEGATIVE_INFINITY;
  let bestNextCol = -1;
  let bestProfitSoFar = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    const colVal = arr[i];
    const colDiff = Math.abs(lastCol - i);

    const profit = colVal - colDiff;

    if (profit > bestProfitSoFar) {
      bestNextVal = colVal;
      bestNextCol = i;
      bestProfitSoFar = profit;
    }
  }

  return { bestNextVal, bestNextCol };
}

module.exports = { maxPoints };
