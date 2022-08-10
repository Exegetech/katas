const MyCircularQueue = function (k) {
  this.k = k;
  this.size = 0;
  this.head = -1;
  this.tail = -1;
  this.arr = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }

  if (this.isEmpty()) {
    this.head = 0;
    this.tail = 0;

    this.arr[this.head] = value;
    this.arr[this.tail] = value;
    this.size++;

    return true;
  }

  this.tail = this.tail + (1 % this.k);
  this.arr[this.tail] = value;
  this.size++;

  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }

  if (this.size === 1) {
    this.head = -1;
    this.tail = -1;
    this.size--;
    return true;
  }

  this.head = this.head + (1 % this.k);
  this.size--;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.arr[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.arr[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.k;
};

module.exports = { MyCircularQueue };
