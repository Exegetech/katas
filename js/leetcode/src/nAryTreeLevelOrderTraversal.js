const levelOrder = function (root) {
  if (root === null) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const qlen = queue.length;
    const subResult = [];

    for (let i = 0; i < qlen; i++) {
      const node = queue.shift();
      subResult.push(node.val);

      for (const c of node.children) {
        queue.push(c);
      }
    }

    result.push(subResult);
  }

  return result;
};

module.exports = { levelOrder };
