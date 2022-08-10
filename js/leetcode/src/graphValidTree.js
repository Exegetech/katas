/**
 * Union Find
 */
const validTree = function (n, edges) {
  const roots = new Array(n).fill(-1).map((el, i) => i);

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];

    const rootFrom = find(roots, from);
    const rootTo = find(roots, to);

    if (rootFrom === rootTo) {
      return false;
    }

    roots[rootFrom] = rootTo;
  }

  return allNodesHaveOneRoot(roots);
};

function find(roots, node) {
  while (node !== roots[node]) {
    node = roots[node];
  }

  return node;
}

function allNodesHaveOneRoot(roots) {
  const rootSet = new Set();
  roots.forEach((root, node) => {
    if (root === node) {
      rootSet.add(root);
    }
  });

  return rootSet.size === 1;
}

module.exports = { validTree };
