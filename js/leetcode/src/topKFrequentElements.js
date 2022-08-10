const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

const topKFrequent = function (nums, k) {
  const numCountDict = {};
  for (const n of nums) {
    if (typeof numCountDict[n] === 'undefined') {
      numCountDict[n] = 0;
    } else {
      numCountDict[n] += 1;
    }
  }

  const maxHeap = new MaxPriorityQueue({
    priority: (obj) => obj.count,
  });

  for (const n in numCountDict) {
    maxHeap.enqueue({
      num: n,
      count: numCountDict[n],
    });
  }

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(parseInt(maxHeap.dequeue().element.num));
  }

  return result;
};

module.exports = { topKFrequent };
