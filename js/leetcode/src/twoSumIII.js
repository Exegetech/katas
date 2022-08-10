const TwoSum = function () {
  this.nums = [];
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  this.nums.push(number);
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  const set = new Set();
  for (let i = 0; i < this.nums.length; i++) {
    const num = this.nums[i];
    const remainder = value - num;

    if (set.has(remainder)) {
      return true;
    }

    set.add(num);
  }

  return false;
};

module.exports = { TwoSum };
