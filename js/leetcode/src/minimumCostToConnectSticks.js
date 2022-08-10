const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const connectSticks = function (sticks) {
  const minQueue = new MinPriorityQueue();
  for (const s of sticks) {
    minQueue.enqueue(s);
  }

  let cost = 0;
  while (minQueue.size() > 1) {
    const x = minQueue.dequeue().element;
    const y = minQueue.dequeue().element;
    const total = x + y;
    cost += total;

    minQueue.enqueue(total);
  }

  return cost;
};

module.exports = { connectSticks };
