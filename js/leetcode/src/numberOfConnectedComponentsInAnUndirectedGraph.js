const countComponents = function (n, edges) {
  const roots = new Array(n).fill(-1).map((el, i) => i);

  unionFind(roots, edges);

  return countRoots(roots);
};

function unionFind(roots, edges) {
  edges.forEach((edge) => {
    const [from, to] = edge;

    union(roots, from, to);
  });
}

function union(roots, from, to) {
  const rootFrom = find(roots, from);
  const rootTo = find(roots, to);

  if (rootFrom !== rootTo) {
    roots[rootFrom] = rootTo;
  }
}

function find(roots, node) {
  while (node !== roots[node]) {
    node = roots[node];
  }

  return node;
}

function countRoots(roots) {
  const rootSet = new Set();
  roots.forEach((r, i) => {
    if (r === i) {
      rootSet.add(r);
    }
  });

  return rootSet.size;
}

module.exports = { countComponents };
