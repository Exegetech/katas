const findOrder = function (numCourses, prerequisites) {
  const prerequisitesGraph = buildPrerequisitesGraph(numCourses, prerequisites);
  const order = [];

  const visited = new Set();
  const queue = [];

  for (let i = 0; i < prerequisitesGraph.length; i++) {
    if (prerequisitesGraph[i].size === 0) {
      visited.add(i);
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const course = queue.shift();
    order.push(course);

    for (let i = 0; i < prerequisitesGraph.length; i++) {
      if (!visited.has(i)) {
        prerequisitesGraph[i].delete(course);

        if (prerequisitesGraph[i].size === 0) {
          visited.add(i);
          queue.push(i);
        }
      }
    }
  }

  if (visited.size === numCourses) {
    return order;
  }

  return [];
};

function buildPrerequisitesGraph(n, prerequisites) {
  const prereqs = new Array(n).fill(0).map(() => new Set());

  prerequisites.forEach((p) => {
    const [course, prereq] = p;

    prereqs[course].add(prereq);
  });

  return prereqs;
}

module.exports = { findOrder };
