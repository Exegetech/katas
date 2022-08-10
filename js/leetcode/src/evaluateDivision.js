const calcEquation = function (equations, values, queries) {
  const graph = buildGraph(equations, values);

  return queries.map((query) => {
    const visited = new Set();
    return dfs(graph, visited, query[0], query[1]);
  });
};

function dfs(graph, visited, from, to) {
  visited.add(from);

  if (typeof graph[from] === 'undefined') {
    return -1;
  }

  if (from === to) {
    return 1;
  }

  const neighborMap = graph[from];
  const neighbors = Object.keys(neighborMap);

  for (const n of neighbors) {
    if (!visited.has(n)) {
      const subResult = dfs(graph, visited, n, to);
      if (subResult !== -1.0) {
        return subResult * neighborMap[n];
      }
    }
  }

  return -1.0;
}

function buildGraph(equations, values) {
  const graph = {};

  for (let i = 0; i < equations.length; i++) {
    const [from, to] = equations[i];
    const value = values[i];

    if (typeof graph[from] === 'undefined') {
      graph[from] = {};
    }

    if (typeof graph[to] === 'undefined') {
      graph[to] = {};
    }

    graph[from][to] = value;
    graph[to][from] = 1 / value;
  }

  return graph;
}

module.exports = { calcEquation };
