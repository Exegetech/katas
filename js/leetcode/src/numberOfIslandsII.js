const numIslands2 = function (m, n, positions) {
  const unionFind = new UnionFind(m, n);
  const islands = [];

  positions.forEach((p) => {
    const node = { row: p[0], col: p[1] };

    if (unionFind.visited(node)) {
      const rootsSet = unionFind.getRootsSet();
      islands.push(rootsSet.size);

      return;
    }

    unionFind.addAsRoot(node);

    const adjacentNeighbors = getAdjacentNeighbors(m, n, node, unionFind);

    for (const n of adjacentNeighbors) {
      unionFind.merge(node, n);
    }

    const rootsSet = unionFind.getRootsSet();
    islands.push(rootsSet.size);
  });

  return islands;
};

class UnionFind {
  constructor(m, n) {
    // Initialize null to indicate unprocessed

    this.roots = new Array(m).fill(0).map(() => new Array(n).fill(null));

    this.ranks = new Array(m).fill(0).map(() => new Array(n).fill(null));
  }

  visited(node) {
    return this.roots[node.row][node.col] !== null;
  }

  addAsRoot(node) {
    this.roots[node.row][node.col] = node;
    this.ranks[node.row][node.col] = 1;
  }

  find(node) {
    const _root = this.roots[node.row][node.col];
    if (node.row === _root.row && node.col === _root.col) {
      return node;
    }

    const root = this.find(this.roots[node.row][node.col]);
    this.roots[node.row][node.col] = root;

    return this.roots[node.row][node.col];
  }

  merge(node1, node2) {
    const root1 = this.find(node1);
    const root2 = this.find(node2);

    if (!(root1.row === root2.row && root1.col === root2.col)) {
      const rank1 = this.ranks[root1.row][root1.col];
      const rank2 = this.ranks[root2.row][root2.col];

      if (rank1 > rank2) {
        this.roots[root2.row][root2.col] = root1;
      } else if (rank1 < rank2) {
        this.roots[root1.row][root1.col] = root2;
      } else {
        this.roots[root2.row][root2.col] = root1;
        this.ranks[root1.row][root1.col] += 1;
      }
    }
  }

  getRootsSet() {
    const set = new Set();

    for (let row = 0; row < this.roots.length; row++) {
      for (let col = 0; col < this.roots[row].length; col++) {
        if (this.roots[row][col] !== null) {
          const node = { row, col };
          const root = this.find(node);

          set.add(`${root.row}-${root.col}`);
        }
      }
    }

    return set;
  }
}

function getAdjacentNeighbors(m, n, node, unionFind) {
  return [
    { row: node.row, col: node.col + 1 },
    { row: node.row, col: node.col - 1 },
    { row: node.row + 1, col: node.col },
    { row: node.row - 1, col: node.col },
  ].filter((node) => {
    return (
      node.row >= 0 &&
      node.row < m &&
      node.col >= 0 &&
      node.col < n &&
      unionFind.visited(node)
    );
  });
}

module.exports = { numIslands2 };
