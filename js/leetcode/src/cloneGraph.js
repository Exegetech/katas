const { Node } = require('../tests/helpers/node');

const cloneGraph = function (node) {
  if (!node) {
    return null;
  }

  const root = node;
  const queue = [root];
  const map = new Map();
  const clonedRoot = new Node(root.val);
  map.set(root, clonedRoot);

  while (queue.length > 0) {
    const qlen = queue.length;

    for (let i = 0; i < qlen; i++) {
      const currNode = queue.shift();
      const clonedCurrNode = map.get(currNode);

      for (const n of currNode.neighbors) {
        if (!map.has(n)) {
          const cloned = new Node(n.val);
          map.set(n, cloned);

          queue.push(n);
        }

        clonedCurrNode.neighbors.push(map.get(n));
      }
    }
  }

  return map.get(root);
};

module.exports = { cloneGraph };
