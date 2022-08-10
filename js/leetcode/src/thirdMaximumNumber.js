const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

const thirdMax2 = function (nums) {
  const set = new Set();
  const maxQueue = new MaxPriorityQueue();
  nums.forEach((el) => {
    if (!set.has(el)) {
      set.add(el);
      maxQueue.enqueue(el);
    }
  });

  const max = maxQueue.front().element;
  let thirdMax = null;
  for (let i = 0; i < 3; i++) {
    if (maxQueue.isEmpty()) {
      return max;
    }

    thirdMax = maxQueue.dequeue().element;
  }

  return thirdMax;
};

// O(n) solution
const thirdMax = function (nums) {
  const set = new Set();

  let max = Number.NEGATIVE_INFINITY;
  let max2 = Number.NEGATIVE_INFINITY;
  let max3 = Number.NEGATIVE_INFINITY;

  nums.forEach((n) => {
    if (!set.has(n)) {
      if (n > max) {
        max3 = max2;
        max2 = max;
        max = n;
      } else if (n > max2) {
        max3 = max2;
        max2 = n;
      } else if (n > max3) {
        max3 = n;
      }
    }

    set.add(n);
  });

  if (max3 === Number.NEGATIVE_INFINITY) {
    return max;
  }

  return max3;
};

module.exports = { thirdMax, thirdMax2 };
