const MyQueue = function () {
  this.stack = [];
  this.tempStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack.length > 1) {
    this.tempStack.push(this.stack.pop());
  }

  const val = this.stack.pop();

  while (this.tempStack.length > 0) {
    this.stack.push(this.tempStack.pop());
  }

  return val;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack.length > 1) {
    this.tempStack.push(this.stack.pop());
  }

  const val = this.stack[this.stack.length - 1];

  while (this.tempStack.length > 0) {
    this.stack.push(this.tempStack.pop());
  }

  return val;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

module.exports = { MyQueue };
