const minCostToSupplyWater = function (n, wells, pipes) {
  const sortedEdges = buildSortedEdges(wells, pipes);
  const unionFind = new UnionFind(n);

  // due to a virtual node, need to be n instead of n - 1
  let edgesNeeded = n;
  let totalCost = 0;

  for (let i = 0; i < sortedEdges.length; i++) {
    const { from, to, cost } = sortedEdges[i];

    if (!unionFind.isConnected(from, to)) {
      unionFind.merge(from, to);
      edgesNeeded--;
      totalCost += cost;
    }

    if (edgesNeeded === 0) {
      return totalCost;
    }
  }
};

function buildSortedEdges(wells, pipes) {
  const edges = [];

  for (let i = 0; i < wells.length; i++) {
    const from = 0; // virtual node
    const to = i + 1;
    const cost = wells[i];

    edges.push({
      from,
      to,
      cost,
    });
  }

  for (let i = 0; i < pipes.length; i++) {
    const [from, to, cost] = pipes[i];

    edges.push({
      from,
      to,
      cost,
    });
  }

  edges.sort((e1, e2) => {
    if (e1.cost <= e2.cost) {
      return -1;
    }

    return 1;
  });

  return edges;
}

class UnionFind {
  constructor(n) {
    this.roots = new Array(n).fill(-1).map((el, i) => i);
  }

  find(x) {
    let adjustedX = x - 1;

    while (adjustedX !== this.roots[adjustedX]) {
      adjustedX = this.roots[adjustedX];
    }

    return adjustedX;
  }

  merge(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      this.roots[rootY] = rootX;
    }
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

module.exports = { minCostToSupplyWater };
