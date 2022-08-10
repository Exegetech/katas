const MyStack = function () {
  this.queue = [];
  this.tempQueue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue.length > 1) {
    this.tempQueue.push(this.queue.shift());
  }

  const val = this.queue.shift();

  while (this.tempQueue.length > 0) {
    this.queue.push(this.tempQueue.shift());
  }

  return val;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.queue.length > 1) {
    this.tempQueue.push(this.queue.shift());
  }
  const val = this.queue.shift();

  while (this.tempQueue.length > 0) {
    this.queue.push(this.tempQueue.shift());
  }

  this.queue.push(val);

  return val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

module.exports = { MyStack };
