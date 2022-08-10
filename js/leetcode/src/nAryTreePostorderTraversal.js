const postorder = function (root) {
  if (root === null) {
    return [];
  }

  const result = [];
  const stack = [root];
  const stack2 = [];

  while (stack.length > 0) {
    const node = stack.pop();
    stack2.push(node);

    const children = node.children;

    for (const c of children) {
      stack.push(c);
    }
  }

  while (stack2.length > 0) {
    result.push(stack2.pop().val);
  }

  return result;
};

module.exports = { postorder };
