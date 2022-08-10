const findDisappearedNumbers = function (nums) {
  const set = new Set();
  for (let i = 1; i <= nums.length; i++) {
    set.add(i);
  }

  nums.forEach((n) => set.delete(n));

  return Array.from(set);
};

module.exports = { findDisappearedNumbers };
