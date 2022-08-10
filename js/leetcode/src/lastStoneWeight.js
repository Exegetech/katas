const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

const lastStoneWeight = function (stones) {
  if (stones.length === 0) {
    return 0;
  }

  if (stones.length === 1) {
    return stones[0];
  }

  const maxQueue = new MaxPriorityQueue();
  for (const s of stones) {
    maxQueue.enqueue(s);
  }

  while (true) {
    const left = maxQueue.size();
    if (left === 0) {
      return 0;
    }

    if (left === 1) {
      return maxQueue.front().element;
    }

    const x = maxQueue.dequeue().element;
    const y = maxQueue.dequeue().element;

    if (x !== y) {
      const leftover = Math.abs(x - y);
      maxQueue.enqueue(leftover);
    }
  }
};

module.exports = { lastStoneWeight };
