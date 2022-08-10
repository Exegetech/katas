const inorderSuccessor = function (root, p) {
  if (root === null) {
    return null;
  }

  const stack = [];
  let found = false;

  let node = root;
  while (node !== null || stack.length > 0) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();

    if (node.val === p.val && !found) {
      found = true;
    } else if (found) {
      return node;
    }

    node = node.right;
  }

  return null;
};

module.exports = { inorderSuccessor };
