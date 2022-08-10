const merge = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;

  let p = nums1.length - 1;

  while (p >= 0) {
    if (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1];
        p--;
        p1--;
      } else {
        nums1[p] = nums2[p2];
        p--;
        p2--;
      }
    } else if (p1 >= 0) {
      nums1[p] = nums1[p1];
      p--;
      p1--;
    } else if (p2 >= 0) {
      nums1[p] = nums2[p2];
      p--;
      p2--;
    }
  }
};

module.exports = { merge };
