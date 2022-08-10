const { Interval } = require('../tests/helpers/interval');

const employeeFreeTime = function (schedule) {
  const combinedSortedSchedules = getCombinedSortedSchedules(schedule);
  if (combinedSortedSchedules.length === 1) {
    return [];
  }

  const mergedSchedules = [combinedSortedSchedules[0]];

  for (let i = 1; i < combinedSortedSchedules.length; i++) {
    const prev = mergedSchedules.pop();
    const curr = combinedSortedSchedules[i];

    if (overlap(prev, curr)) {
      const merged = merge(prev, curr);
      mergedSchedules.push(merged);
    } else {
      mergedSchedules.push(prev);
      mergedSchedules.push(curr);
    }
  }

  const freeTime = [];
  for (let i = 1; i < mergedSchedules.length; i++) {
    const prev = mergedSchedules[i - 1];
    const curr = mergedSchedules[i];

    const from = prev.end;
    const to = curr.start;

    if (to - from >= 1) {
      freeTime.push(new Interval(from, to));
    }
  }

  return freeTime;
};

function getCombinedSortedSchedules(schedule) {
  let combined = [];
  for (let i = 0; i < schedule.length; i++) {
    combined = combined.concat(schedule[i]);
  }

  combined.sort((s1, s2) => {
    if (s1.start <= s2.start) {
      return -1;
    }

    return 1;
  });

  return combined;
}

function overlap(i1, i2) {
  return Math.min(i1.end, i2.end) >= Math.max(i1.start, i2.start);
}

function merge(i1, i2) {
  const start = Math.min(i1.start, i2.start);
  const end = Math.max(i1.end, i2.end);

  return new Interval(start, end);
}

module.exports = { employeeFreeTime };
