const earliestAcq = function (logs, n) {
  const roots = new Array(n).fill(-1).map((el, i) => i);

  sortLogs(logs);

  for (let i = 0; i < logs.length; i++) {
    const from = logs[i][1];
    const to = logs[i][2];

    const rootFrom = find(roots, from);
    const rootTo = find(roots, to);

    if (rootFrom === rootTo) {
      const rootsCount = getRootsCount(roots);

      if (rootsCount === 1) {
        if (i >= 1) {
          return logs[i - 1][0];
        }

        return -1;
      }

      continue;
    }

    roots[rootTo] = rootFrom;
  }

  if (allHasOneRoot(roots)) {
    return logs[logs.length - 1][0];
  }

  return -1;
};

function sortLogs(logs) {
  logs.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }

    return 1;
  });
}

function find(roots, node) {
  while (node !== roots[node]) {
    node = roots[node];
  }

  return node;
}

function getRootsCount(roots) {
  const rootSet = new Set();
  roots.forEach((root, node) => {
    if (root === node) {
      rootSet.add(root);
    }
  });

  return rootSet.size;
}

function allHasOneRoot(roots) {
  const rootSet = new Set();
  roots.forEach((root, node) => {
    if (root === node) {
      rootSet.add(root);
    }
  });

  return rootSet.size === 1;
}

module.exports = { earliestAcq };
