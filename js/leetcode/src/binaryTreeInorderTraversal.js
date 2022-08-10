const inorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const collect = [];
  const stack = [];
  let node = root;

  while (node !== null || stack.length > 0) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    collect.push(node.val);
    node = node.right;
  }

  return collect;
};

const inorderTraversal2 = function (root) {
  const result = [];
  recurse(result, root);

  return result;
};

function recurse(result, root) {
  if (root === null) {
    return;
  }

  recurse(result, root.left);
  result.push(root.val);
  recurse(result, root.right);
}

module.exports = { inorderTraversal, inorderTraversal2 };
