const leadsToDestination = function (n, edges, source, destination) {
  const graph = buildGraph(n, edges);
  const visited = new Set();
  let allLeadToDestination = true;

  function dfsBacktrack(node) {
    if (visited.has(node)) {
      allLeadToDestination = allLeadToDestination && false;
      return;
    }

    if (node === destination) {
      allLeadToDestination = allLeadToDestination && true;

      const neighbors = graph[destination];
      if (neighbors.length !== 0) {
        allLeadToDestination = allLeadToDestination && false;
      }

      return;
    }

    visited.add(node);

    const neighbors = graph[node];
    if (neighbors.length === 0) {
      if (node !== destination) {
        allLeadToDestination = allLeadToDestination && false;
      }
    }

    for (const n of neighbors) {
      dfsBacktrack(n);
      visited.delete(n);
    }
  }

  dfsBacktrack(source);

  return allLeadToDestination;
};

function buildGraph(n, edges) {
  const graph = new Array(n).fill(0).map(() => []);

  edges.forEach((edge) => {
    const [from, to] = edge;

    graph[from].push(to);
  });

  return graph;
}

module.exports = { leadsToDestination };
