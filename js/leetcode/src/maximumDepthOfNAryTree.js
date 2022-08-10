const maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  let max = 0;
  for (const c of root.children) {
    max = Math.max(max, maxDepth(c));
  }

  return max + 1;
};

module.exports = { maxDepth };
