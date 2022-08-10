const WALL = -1;
const GATE = -0;

const wallsAndGates = function (rooms) {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[row].length; col++) {
      if (rooms[row][col] === GATE) {
        traverse(rooms, row, col);
      }
    }
  }
};

function traverse(rooms, row, col) {
  const queue = [];
  const visited = {};

  queue.push({ row, col });
  visited[`row${row}-col${col}`] = true;

  let step = 0;

  while (queue.length > 0) {
    const qSize = queue.length;

    for (let i = 0; i < qSize; i++) {
      const node = queue.shift();

      rooms[node.row][node.col] = Math.min(rooms[node.row][node.col], step);

      const neighbors = getNeighbors(rooms, node.row, node.col);

      for (const n of neighbors) {
        const key = `row${n.row}-col${n.col}`;
        if (!visited[key]) {
          queue.push({
            row: n.row,
            col: n.col,
          });
          visited[key] = true;
        }
      }
    }

    step++;
  }
}

function getNeighbors(rooms, row, col) {
  const neighbors = [];

  const top = row - 1;
  if (top >= 0 && isRoom(rooms, top, col)) {
    neighbors.push({ row: top, col });
  }

  const bot = row + 1;
  if (bot < rooms.length && isRoom(rooms, bot, col)) {
    neighbors.push({ row: bot, col });
  }

  const left = col - 1;
  if (left >= 0 && isRoom(rooms, row, left)) {
    neighbors.push({ row, col: left });
  }

  const right = col + 1;
  if (right < rooms[row].length && isRoom(rooms, row, right)) {
    neighbors.push({ row, col: right });
  }

  return neighbors;
}

function isRoom(rooms, row, col) {
  return !(rooms[row][col] === WALL || rooms[row][col] === GATE);
}

module.exports = { wallsAndGates };
