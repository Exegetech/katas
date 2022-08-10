const countUnivalSubtrees = function (root) {
  const { count } = recurse(root);
  return count;
};

function recurse(root) {
  if (root === null) {
    return {
      count: 0,
      isUnival: true,
    };
  }

  let currNodeIsUnival = true;

  if (root.left && root.left.val !== root.val) {
    currNodeIsUnival = false;
  }

  if (root.right && root.right.val !== root.val) {
    currNodeIsUnival = false;
  }

  const left = recurse(root.left);
  const right = recurse(root.right);

  if (!left.isUnival || !right.isUnival) {
    currNodeIsUnival = false;
  }

  if (currNodeIsUnival) {
    return {
      count: 1 + left.count + right.count,
      isUnival: currNodeIsUnival,
    };
  }

  return {
    count: left.count + right.count,
    isUnival: currNodeIsUnival,
  };
}

module.exports = { countUnivalSubtrees };
