const MyHashSet = function () {
  this.k = 10000;
  this.arr = new Array(this.k);
  for (let i = 0; i < this.arr.length; i++) {
    this.arr[i] = [];
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const bucket = key % this.k;
  this.arr[bucket].push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const bucket = key % this.k;
  const index = this.arr[bucket].findIndex((el) => el === key);
  if (index !== -1) {
    this.arr[bucket].splice(index, 1);
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const bucket = key % this.k;
  const index = this.arr[bucket].findIndex((el) => el === key);
  return index !== -1;
};

module.exports = { MyHashSet };
