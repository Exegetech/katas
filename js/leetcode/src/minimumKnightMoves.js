const minKnightMoves = function (x, y) {
  const queue = [{ x: 0, y: 0 }];
  const visited = new Set();

  let steps = -1;
  while (queue.length > 0) {
    const qlen = queue.length;
    steps++;

    for (let i = 0; i < qlen; i++) {
      const cell = queue.shift();
      if (visited.has(`${cell.x}-${cell.y}`)) {
        continue;
      }

      visited.add(`${cell.x}-${cell.y}`);

      if (cell.x === x && cell.y === y) {
        return steps;
      }

      const nextSteps = getNextSteps(cell.x, cell.y);
      for (const n of nextSteps) {
        queue.push(n);
      }
    }
  }

  return -1;
};

function getNextSteps(x, y) {
  return [
    { x: x + 1, y: y + 2 },
    { x: x + 2, y: y + 1 },
    { x: x + 2, y: y - 1 },
    { x: x + 1, y: y - 2 },
    { x: x - 1, y: y - 2 },
    { x: x - 2, y: y - 1 },
    { x: x - 2, y: y + 1 },
    { x: x - 1, y: y + 2 },
  ];
}

module.exports = { minKnightMoves };
