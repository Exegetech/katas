const openLock = function (deadends, target) {
  const start = '0000';
  const queue = [];
  const visited = {};
  let step = 0;

  queue.push(start);
  visited[start] = true;

  while (queue.length > 0) {
    const qsize = queue.length;

    for (let i = 0; i < qsize; i++) {
      const node = queue.shift();

      if (node === target) {
        return step;
      }

      if (deadends.indexOf(node) === -1) {
        const neighbors = getNeighbors(node);

        for (const n of neighbors) {
          if (!visited[n]) {
            queue.push(n);
            visited[n] = true;
          }
        }
      }
    }

    step++;
  }

  return -1;
};

function getNeighbors(node) {
  const neighbors = [];
  const nodeArr = node.split('').map((el) => parseInt(el));

  for (let i = 0; i < nodeArr.length; i++) {
    nodeArr[i] = goUp(nodeArr[i]);
    neighbors.push(nodeArr.join(''));

    nodeArr[i] = goDown(nodeArr[i]);
    nodeArr[i] = goDown(nodeArr[i]);
    neighbors.push(nodeArr.join(''));
    nodeArr[i] = goUp(nodeArr[i]);
  }

  return neighbors;
}

function goUp(num) {
  if (num === 9) {
    return 0;
  }

  return num + 1;
}

function goDown(num) {
  if (num === 0) {
    return 9;
  }

  return num - 1;
}

module.exports = { openLock };
