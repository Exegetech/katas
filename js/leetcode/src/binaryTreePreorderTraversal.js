const preorderTraversal = function (root) {
  const result = [];
  recurse(result, root);

  return result;
};

function recurse(result, root) {
  if (root === null) {
    return;
  }

  result.push(root.val);
  recurse(result, root.left);
  recurse(result, root.right);
}

const preorderTraversal2 = function (root) {
  if (root === null) {
    return [];
  }

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
};

module.exports = { preorderTraversal, preorderTraversal2 };
