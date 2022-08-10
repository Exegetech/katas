/**
 * Breadth First Search
 */
const findCircleNum = function (isConnected) {
  let count = 0;
  const visited = new Set();

  for (let from = 0; from < isConnected.length; from++) {
    if (!visited.has(from)) {
      bfs(isConnected, visited, from);
      count += 1;
    }
  }

  return count;
};

function bfs(isConnected, visited, province) {
  const queue = [province];

  while (queue.length > 0) {
    const qlen = queue.length;

    for (let i = 0; i < qlen; i++) {
      const prov = queue.shift();
      visited.add(prov);

      const neighboringProvinces = getNeighboringProvinces(isConnected, prov);

      for (const np of neighboringProvinces) {
        if (!visited.has(np)) {
          queue.push(np);
        }
      }
    }
  }
}

function getNeighboringProvinces(isConnected, province) {
  const connectedTos = isConnected[province];
  const neighbors = [];

  for (let i = 0; i < connectedTos.length; i++) {
    if (i !== province && connectedTos[i] === 1) {
      neighbors.push(i);
    }
  }

  return neighbors;
}

/**
 * Depth First Search
 */
const findCircleNum2 = function (isConnected) {
  let count = 0;
  const visited = new Set();

  for (let from = 0; from < isConnected.length; from++) {
    if (!visited.has(from)) {
      dfs(isConnected, visited, from);
      count += 1;
    }
  }

  return count;
};

function dfs(isConnected, visited, province) {
  const stack = [province];

  while (stack.length > 0) {
    const prov = stack.pop();
    visited.add(prov);

    const neighboringProvinces = getNeighboringProvinces(isConnected, prov);

    for (const np of neighboringProvinces) {
      if (!visited.has(np)) {
        stack.push(np);
      }
    }
  }
}

/**
 * Union Find
 */
const findCircleNum3 = function (isConnected) {
  const roots = new Array(isConnected.length).fill(-1);

  unionFind(isConnected, roots);

  return countNodesThatAreRoot(roots);
};

function unionFind(isConnected, roots) {
  for (let from = 0; from < isConnected.length; from++) {
    for (let to = 0; to < isConnected[from].length; to++) {
      if (from !== to && isConnected[from][to] === 1) {
        merge(roots, from, to);
      }
    }
  }
}

function merge(roots, from, to) {
  const rootFrom = find(roots, from);
  const rootTo = find(roots, to);

  if (rootFrom !== rootTo) {
    roots[rootFrom] = rootTo;
  }
}

function find(roots, node) {
  while (roots[node] !== -1) {
    node = roots[node];
  }

  return node;
}

function countNodesThatAreRoot(roots) {
  return roots.reduce((acc, el) => {
    if (el === -1) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

module.exports = { findCircleNum, findCircleNum2, findCircleNum3 };
