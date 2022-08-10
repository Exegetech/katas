const canVisitAllRooms = function (rooms) {
  const stack = [0];
  const allKeys = new Set();
  const visited = new Array(rooms.length);

  while (stack.length > 0) {
    const roomIdx = stack.pop();

    const keys = rooms[roomIdx];
    keys.forEach((k) => allKeys.add(k));

    visited[roomIdx] = true;

    const nextRooms = Array.from(allKeys);

    for (const r of nextRooms) {
      if (!visited[r]) {
        stack.push(r);
      }
    }
  }

  for (let i = 0; i < visited.length; i++) {
    if (visited[i] !== true) {
      return false;
    }
  }

  return true;
};

module.exports = { canVisitAllRooms };
