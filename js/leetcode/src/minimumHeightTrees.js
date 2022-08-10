const findMinHeightTrees = function (n, edges) {
  const predecessorMap = buildPredecessorMap(n, edges);
  console.log(predecessorMap);

  const remainingNodes = new Set();
  for (let i = 0; i < n; i++) {
    remainingNodes.add(i);
  }

  const queue = [];

  for (const node of predecessorMap.keys()) {
    const predecessors = predecessorMap.get(node);
    if (predecessors.size === 0) {
      remainingNodes.delete(node);
      queue.push(node);
    }
  }

  while (queue.length > 0) {
    const qlen = queue.length;
    for (let i = 0; i < qlen; i++) {
      const node = queue.shift();

      for (let nextNode = 0; nextNode < n; nextNode++) {
        if (remainingNodes.has(nextNode)) {
          const predecessors = predecessorMap.get(nextNode);
          predecessors.delete(node);

          if (predecessors.size === 0) {
            queue.push(nextNode);
            remainingNodes.delete(nextNode);
          }
        }
      }
    }

    if (remainingNodes === 2) {
      break;
    }
  }

  return Array.from(remainingNodes);
};

function buildPredecessorMap(n, edges) {
  const predecessorMap = new Map();
  for (let i = 0; i < n; i++) {
    predecessorMap.set(i, new Set());
  }

  edges.forEach((edge) => {
    const [from, to] = edge;
    predecessorMap.get(from).add(to);
    predecessorMap.get(to).add(from);
  });

  return predecessorMap;
}

module.exports = { findMinHeightTrees };
