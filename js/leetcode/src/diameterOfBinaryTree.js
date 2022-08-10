const diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function recurse(node) {
    if (node.left === null && node.right === null) {
      return 0;
    }

    if (node.left && node.right) {
      const left = recurse(node.left);
      const right = recurse(node.right);

      const currDiameter = left + right + 2;
      diameter = Math.max(diameter, currDiameter);

      const longestChild = Math.max(left, right);
      return 1 + longestChild;
    }

    if (node.left) {
      const left = recurse(node.left);
      const currDiameter = left + 1;
      diameter = Math.max(diameter, currDiameter);

      return 1 + left;
    }

    const right = recurse(node.right);
    const currDiameter = right + 1;
    diameter = Math.max(diameter, currDiameter);

    return 1 + right;
  }

  recurse(root);

  return diameter;
};

module.exports = { diameterOfBinaryTree };
