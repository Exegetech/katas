const closestValue = function (root, target) {
  if (root === null) {
    return null;
  }

  let diff = Number.POSITIVE_INFINITY;
  let closest = root.val;

  function runClosest(node) {
    if (node === null) {
      return;
    }

    const currDiff = Math.abs(node.val - target);
    if (currDiff < diff) {
      diff = currDiff;
      closest = node.val;
    }

    if (target < node.val) {
      runClosest(node.left);
    } else {
      runClosest(node.right);
    }
  }

  runClosest(root);

  return closest;
};

module.exports = { closestValue };
