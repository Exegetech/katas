const numBusesToDestination = function (routes, source, target) {
  const routesGraph = makeRoutesGraph(routes);

  let hop = -1;
  const queue = [source];
  const visited = new Set();
  visited.add(source);

  while (queue.length > 0) {
    hop++;
    const qlen = queue.length;

    for (let i = 0; i < qlen; i++) {
      const stop = queue.shift();

      if (stop === target) {
        return hop;
      }

      const nextStops = routesGraph[stop];

      for (let i = 0; i < nextStops.length; i++) {
        const canBeVisited = nextStops[i] === 1;
        if (canBeVisited && !visited.has(i)) {
          visited.add(i);
          queue.push(i);
        }
      }
    }
  }

  return -1;
};

function makeRoutesGraph(routes) {
  const highestBusStopNum = getHighestBusStopNum(routes);

  const graph = new Array(highestBusStopNum + 1)
    .fill(0)
    .map(() => new Array(highestBusStopNum + 1).fill(0));

  routes.forEach((route) => {
    route.forEach((from) => {
      route.forEach((to) => {
        graph[from][to] = 1;
      });
    });
  });

  return graph;
}

function getHighestBusStopNum(routes) {
  let max = 0;
  routes.forEach((route) => {
    route.forEach((num) => {
      max = Math.max(max, num);
    });
  });

  return max;
}

module.exports = { numBusesToDestination };
