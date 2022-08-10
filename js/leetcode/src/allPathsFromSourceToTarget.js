const allPathsSourceTarget = function (graph) {
  const result = [];
  const visited = new Set();
  const stack = [];

  dfsBacktrack(graph, visited, stack, 0, graph.length - 1, result);

  return result;
};

function dfsBacktrack(graph, visited, stack, from, to, result) {
  if (visited.has(from)) {
    return;
  }

  if (from === to) {
    visited.add(from);
    stack.push(from);
    result.push([...stack]);
    return;
  }

  stack.push(from);
  visited.add(from);

  const neighbors = graph[from];
  for (const n of neighbors) {
    dfsBacktrack(graph, visited, stack, n, to, result);

    stack.pop();
    visited.delete(n);
  }
}

module.exports = { allPathsSourceTarget };
