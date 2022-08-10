const merge = function (intervals) {
  const sortedIntervals = sortIntervals(intervals);
  const result = [sortedIntervals[0]];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const prevInterval = result.pop();
    const currInterval = sortedIntervals[i];

    if (overlap(prevInterval, currInterval)) {
      const merged = mergeInterval(prevInterval, currInterval);
      result.push(merged);
    } else {
      result.push(prevInterval);
      result.push(currInterval);
    }
  }

  return result;
};

function sortIntervals(intervals) {
  intervals.sort((i1, i2) => {
    if (i1[0] <= i2[0]) {
      return -1;
    }

    return 1;
  });

  return intervals;
}

function overlap(i1, i2) {
  return Math.min(i1[1], i2[1]) >= Math.max(i1[0], i2[0]);
}

function mergeInterval(i1, i2) {
  return [Math.min(i1[0], i2[0]), Math.max(i1[1], i2[1])];
}

module.exports = { merge };
