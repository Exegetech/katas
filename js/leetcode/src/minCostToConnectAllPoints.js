const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * Kruskal's algorithm
 * using UnionFind
 */
const minCostConnectPoints = function (points) {
  const edges = buildEdges(points);
  const sortedEdges = sortEdges(edges);
  const nodesCount = points.length;
  const unionFind = new UnionFind(nodesCount);
  const edgesNeeded = points.length - 1;

  let edgesSoFar = 0;
  let totalValue = 0;

  for (let i = 0; i < sortedEdges.length; i++) {
    const [from, to, value] = sortedEdges[i];

    if (!unionFind.connected(from, to)) {
      unionFind.merge(from, to);
      edgesSoFar++;
      totalValue += value;
    }

    if (edgesSoFar === edgesNeeded) {
      break;
    }
  }

  return totalValue;
};

class UnionFind {
  constructor(n) {
    this.roots = new Array(n).fill(-1).map((el, i) => i);
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  find(x) {
    while (x !== this.roots[x]) {
      x = this.roots[x];
    }

    return x;
  }

  merge(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      this.roots[rootY] = rootX;
    }
  }
}

function buildEdges(points) {
  const edges = [];

  for (let from = 0; from < points.length; from++) {
    for (let to = 0; to < points.length; to++) {
      if (from !== to) {
        const fromX = points[from][0];
        const fromY = points[from][1];

        const toX = points[to][0];
        const toY = points[to][1];

        const distance = Math.abs(fromX - toX) + Math.abs(fromY - toY);

        edges.push([from, to, distance]);
      }
    }
  }

  return edges;
}

function sortEdges(edges) {
  edges.sort((e1, e2) => {
    if (e1[2] < e2[2]) {
      return -1;
    }

    return 1;
  });

  return edges;
}

/**
 * Prim's algorithm
 * using MinPriorityQueue
 */
const minCostConnectPoints2 = function (points) {
  const edgesHeap = new MinPriorityQueue({
    priority: (node) => node.distance,
  });

  for (let i = 1; i < points.length; i++) {
    const from = 0;
    const to = i;
    const distance = calcDistance(points, from, to);

    edgesHeap.enqueue({
      from,
      to,
      distance,
    });
  }

  const edgesNeeded = points.length - 1;

  let edgesSoFar = 0;
  let totalValue = 0;

  const visited = new Set();
  visited.add(0);

  while (edgesHeap.size() > 0) {
    const edge = edgesHeap.dequeue().element;

    if (!visited.has(edge.to)) {
      visited.add(edge.to);
      totalValue += edge.distance;
      edgesSoFar++;

      for (let i = 0; i < points.length; i++) {
        if (!visited.has(i)) {
          const from = edge.to;
          const to = i;
          const distance = calcDistance(points, from, to);

          edgesHeap.enqueue({
            from,
            to,
            distance,
          });
        }
      }
    }

    if (edgesSoFar === edgesNeeded) {
      break;
    }
  }

  return totalValue;
};

function calcDistance(points, from, to) {
  const fromX = points[from][0];
  const fromY = points[from][1];
  const toX = points[to][0];
  const toY = points[to][1];

  return Math.abs(fromX - toX) + Math.abs(fromY - toY);
}

module.exports = {
  minCostConnectPoints,
  minCostConnectPoints2,
};
