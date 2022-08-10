const intersection = function (nums1, nums2) {
  const result = new Set();
  const set = new Set();

  nums1.forEach((n) => set.add(n));
  nums2.forEach((n) => {
    if (set.has(n)) {
      result.add(n);
    }
  });

  return Array.from(result);
};

module.exports = { intersection };
