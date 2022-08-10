const countNodes = function (root) {
  let count = 0;

  function recurse(root) {
    if (root === null) {
      return;
    }

    count++;
    recurse(root.left);
    recurse(root.right);
  }

  recurse(root);

  return count;
};

module.exports = { countNodes };
