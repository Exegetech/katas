const kClosest = function (points, k) {
  if (points.length === 0 || k === 0) {
    return [];
  }

  const sorted = points.sort((a, b) => {
    const aDistance = calcDistance(a);
    const bDistance = calcDistance(b);

    if (aDistance < bDistance) {
      return -1;
    } else {
      return 1;
    }
  });

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(sorted[i]);
  }

  return result;
};

function calcDistance(arr) {
  const x = Math.pow(Math.abs(arr[0]) - 0, 2);
  const y = Math.pow(Math.abs(arr[1]) - 0, 2);
  const distance = Math.sqrt(x + y);
  return distance;
}

module.exports = { kClosest };
