/**
 * DFS using adjacency list
 * because adjacency matrix gives out of memory error
 */
const validPath = function (n, edges, start, end) {
  const graph = buildGraph(n, edges);

  return dfs(graph, start, end);
};

function buildGraph(n, edges) {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  edges.forEach((edge) => {
    const [from, to] = edge;

    graph[from].push(to);
    graph[to].push(from);
  });

  return graph;
}

function dfs(graph, start, end) {
  const visited = new Set();
  visited.add(start);
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node === end) {
      return true;
    }

    const neighbors = graph[node];
    for (const n of neighbors) {
      if (!visited.has(n)) {
        stack.push(n);
        visited.add(n);
      }
    }
  }

  return false;
}

/**
 * BFS using adjacency list
 * because adjacency matrix gives out of memory error
 */
const validPath2 = function (n, edges, start, end) {
  const graph = buildGraph(n, edges);

  return bfs(graph, start, end);
};

function bfs(graph, start, end) {
  const visited = new Set();
  visited.add(start);
  const queue = [start];

  while (queue.length > 0) {
    const qlen = queue.length;

    for (let i = 0; i < qlen; i++) {
      const node = queue.shift();

      if (node === end) {
        return true;
      }

      const neighbors = graph[node];
      for (const n of neighbors) {
        if (!visited.has(n)) {
          queue.push(n);
          visited.add(n);
        }
      }
    }
  }

  return false;
}

module.exports = { validPath, validPath2 };
