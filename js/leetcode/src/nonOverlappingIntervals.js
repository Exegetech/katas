const eraseOverlapIntervals = function (intervals) {
  if (intervals.length <= 1) {
    return 0;
  }

  const sortedIntervals = sortIntervals(intervals);

  const merged = [sortedIntervals[0]];
  let mergeCount = 0;

  for (let i = 1; i < sortedIntervals.length; i++) {
    const prev = merged.pop();
    const curr = sortedIntervals[i];

    if (overlap(prev, curr)) {
      mergeCount++;
      merged.push(merge(prev, curr));
    } else {
      merged.push(prev);
      merged.push(curr);
    }
  }

  return intervals.length - mergeCount;
};

function sortIntervals(intervals) {
  intervals.sort((i1, i2) => {
    if (i1[0] < i2[0]) {
      return -1;
    }

    return 1;
  });

  return intervals;
}

function overlap(i1, i2) {
  const start = Math.min(i1[0], i2[0]);
  const end = Math.max(i1[1], i2[1]);

  return Math.abs(end - start) >= 1;
}

function merge(i1, i2) {
  const start = Math.min(i1[0], i2[0]);
  const end = Math.max(i1[1], i2[1]);

  return [start, end];
}

module.exports = { eraseOverlapIntervals };
