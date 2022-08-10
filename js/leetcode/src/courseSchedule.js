const canFinish = function (numCourses, prerequisites) {
  const prereqGraph = buildPrereqGraph(numCourses, prerequisites);
  const queue = [];
  const visited = new Set();

  const kvPairs = Array.from(prereqGraph.entries());
  for (const [course, prereq] of kvPairs) {
    if (prereq.size === 0) {
      queue.push(course);
      visited.add(course);
    }
  }

  while (queue.length > 0) {
    const curr = queue.shift();

    const kvPairs = Array.from(prereqGraph.entries());
    for (const [course, prereq] of kvPairs) {
      prereq.delete(curr);

      if (prereq.size === 0 && !visited.has(course)) {
        queue.push(course);
        visited.add(course);
      }
    }
  }

  return visited.size === numCourses;
};

function buildPrereqGraph(numCourses, prerequisites) {
  const graph = new Map();

  for (let i = 0; i < numCourses; i++) {
    graph.set(i, new Set());
  }

  prerequisites.forEach((p) => {
    graph.get(p[0]).add(p[1]);
  });

  return graph;
}

module.exports = { canFinish };
