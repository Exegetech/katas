const postorderTraversal = function (root) {
  const result = [];
  recurse(result, root);

  return result;
};

function recurse(result, root) {
  if (root === null) {
    return;
  }

  recurse(result, root.left);
  recurse(result, root.right);
  result.push(root.val);
}

const postorderTraversal2 = function (root) {
  if (root === null) {
    return [];
  }

  const result = [];
  const stack1 = [root];
  const stack2 = [];

  while (stack1.length > 0) {
    const node = stack1.pop();
    stack2.push(node);

    if (node.left) {
      stack1.push(node.left);
    }

    if (node.right) {
      stack1.push(node.right);
    }
  }

  while (stack2.length > 0) {
    result.push(stack2.pop().val);
  }

  return result;
};

module.exports = { postorderTraversal, postorderTraversal2 };
