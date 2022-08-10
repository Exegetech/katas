const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * Djikstra's algoritm
 */
const networkDelayTime = function (times, n, k) {
  const graph = buildGraph(times, n);

  const minQ = new MinPriorityQueue({
    priority: (node) => node.cost,
  });

  minQ.enqueue({
    node: k,
    cost: 0,
  });

  const visited = new Set();

  let totalCost = 0;

  while (minQ.size() > 0) {
    const curr = minQ.dequeue().element;
    if (visited.has(curr.node)) {
      continue;
    }

    visited.add(curr.node);

    totalCost = Math.max(curr.cost);

    const neighbors = getNeighbors(graph, curr.node);
    for (const n of neighbors) {
      minQ.enqueue({
        node: n.node,
        cost: curr.cost + n.cost,
      });
    }
  }

  if (visited.size < n) {
    return -1;
  }

  return totalCost;
};

function buildGraph(times, n) {
  const graph = new Map();

  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }

  times.forEach((time) => {
    const [from, to, cost] = time;

    graph.get(from).push({
      node: to,
      cost,
    });
  });

  return graph;
}

function getNeighbors(graph, node) {
  return graph.get(node);
}

module.exports = { networkDelayTime };
