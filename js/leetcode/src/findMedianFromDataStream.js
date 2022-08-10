const {
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');

const MedianFinder = function () {
  this.low = new MaxPriorityQueue();
  this.high = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // By default always add to low
  this.low.enqueue(num);

  while (true) {
    const loSize = this.low.size();
    const hiSize = this.high.size();

    if (loSize > hiSize + 1) {
      const loMax = this.low.dequeue().element;
      this.high.enqueue(loMax);
    } else if (loSize + 1 < hiSize) {
      const hiMin = this.high.dequeue().element;
      this.low.enqueue(hiMin);
    } else {
      const loMax = this.low.front().element;
      const hiMinEl = this.high.front();

      if (!hiMinEl) {
        break;
      }

      const hiMin = hiMinEl.element;

      if (loMax > hiMin) {
        const loMax = this.low.dequeue().element;
        this.high.enqueue(loMax);
      } else {
        break;
      }
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const loSize = this.low.size();
  const hiSize = this.high.size();

  if (loSize > hiSize) {
    return this.low.front().element;
  }

  if (loSize < hiSize) {
    return this.high.front().element;
  }

  const loMax = this.low.front().element;
  const hiMin = this.high.front().element;

  return (loMax + hiMin) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// const medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// console.log(medianFinder.findMedian()); // return 2.0

const medianFinder = new MedianFinder();
medianFinder.addNum(3);
medianFinder.addNum(2);
medianFinder.addNum(7);
medianFinder.addNum(4);
console.log(medianFinder.findMedian());
