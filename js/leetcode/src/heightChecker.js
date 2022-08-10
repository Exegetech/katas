const heightChecker = function (heights) {
  const dup = [...heights];
  dup.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let mismatch = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== dup[i]) {
      mismatch++;
    }
  }

  return mismatch;
};

module.exports = { heightChecker };
