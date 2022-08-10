const singleNumber = function (nums) {
  const set = new Set();

  nums.forEach((n) => {
    if (set.has(n)) {
      set.delete(n);
    } else {
      set.add(n);
    }
  });

  return Array.from(set)[0];
};

module.exports = { singleNumber };
