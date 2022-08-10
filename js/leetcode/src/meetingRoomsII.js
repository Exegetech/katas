const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const minMeetingRooms = function (intervals) {
  if (intervals.length === 0) {
    return 0;
  }

  const earliest = intervals.sort((m1, m2) => {
    if (m1[0] <= m2[0]) {
      return -1;
    }

    return 1;
  });

  let rooms = 0;
  const minQueue = new MinPriorityQueue({
    priority: (meeting) => meeting[1],
  });

  for (let i = 0; i < earliest.length; i++) {
    const meeting = earliest[i];

    if (minQueue.size() === 0) {
      minQueue.enqueue(meeting);
      rooms += 1;
    } else {
      const endFirst = minQueue.front().element;
      if (endFirst[1] <= meeting[0]) {
        minQueue.dequeue();
        minQueue.enqueue(meeting);
      } else {
        minQueue.enqueue(meeting);
        rooms += 1;
      }
    }
  }

  return rooms;
};

module.exports = { minMeetingRooms };
