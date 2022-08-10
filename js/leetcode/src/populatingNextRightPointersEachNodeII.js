const connect = function (root) {
  if (root === null) {
    return null;
  }

  const queue = [root];
  const levels = [];

  while (queue.length > 0) {
    const qlen = queue.length;
    const level = [];

    for (let i = 0; i < qlen; i++) {
      const node = queue.shift();
      level.push(node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    levels.push(level);
  }

  levels.forEach((level) => {
    for (let i = 0; i < level.length - 1; i++) {
      const node = level[i];
      node.next = level[i + 1];
    }
  });

  return root;
};

module.exports = { connect };
