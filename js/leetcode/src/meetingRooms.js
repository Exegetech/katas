const canAttendMeetings = function (intervals) {
  const sortedIntervals = sortIntervals(intervals);

  for (let i = 1; i < sortedIntervals.length; i++) {
    const prev = sortedIntervals[i - 1];
    const curr = sortedIntervals[i];

    if (overlap(prev, curr)) {
      return false;
    }
  }

  return true;
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
  return Math.min(i1[1], i2[1]) > Math.max(i1[0], i2[0]);
}

module.exports = { canAttendMeetings };
