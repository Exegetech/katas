const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const KthLargest = function (k, nums) {
  this.k = k;

  const minQueue = new MinPriorityQueue();

  let i = 0;
  while (i < k && i < nums.length) {
    minQueue.enqueue(nums[i]);
    i++;
  }

  for (let j = i; j < nums.length; j++) {
    const currMin = minQueue.front().element;
    if (nums[j] > currMin) {
      minQueue.dequeue();
      minQueue.enqueue(nums[j]);
    }
  }

  this.minQueue = minQueue;
};

KthLargest.prototype.add = function (val) {
  if (this.minQueue.size() < this.k) {
    this.minQueue.enqueue(val);
    return this.minQueue.front().element;
  }

  if (val > this.minQueue.front().element) {
    this.minQueue.dequeue();
    this.minQueue.enqueue(val);
    return this.minQueue.front().element;
  } else {
    return this.minQueue.front().element;
  }
};

module.exports = { KthLargest };
