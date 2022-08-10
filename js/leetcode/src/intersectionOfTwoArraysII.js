const intersect = function (nums1, nums2) {
  const dict = {};
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    if (typeof dict[num] === 'undefined') {
      dict[num] = 1;
    } else {
      dict[num] += 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (typeof dict[num] !== 'undefined' && dict[num] > 0) {
      result.push(num);
      dict[num] -= 1;
    }
  }

  return result;
};

module.exports = { intersect };
