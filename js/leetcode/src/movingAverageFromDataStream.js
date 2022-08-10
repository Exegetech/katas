const MovingAverage = function (size) {
  this.size = size;
  this.queue = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.size === this.queue.length) {
    this.queue.shift();
    this.queue.push(val);
  } else {
    this.queue.push(val);
  }

  const sum = this.queue.reduce((acc, el) => acc + el, 0);

  return sum / this.queue.length;
};

module.exports = { MovingAverage };
