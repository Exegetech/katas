const floodFill = function (image, sr, sc, newColor) {
  const oldColor = image[sr][sc];
  const queue = [{ sr, sc }];
  const visited = {};

  while (queue.length > 0) {
    const qlen = queue.length;
    for (let i = 0; i < qlen; i++) {
      const node = queue.shift();
      image[node.sr][node.sc] = newColor;
      visited[stringify(node)] = true;

      const neighbors = getNeighbors(image, oldColor, node.sr, node.sc);

      for (const n of neighbors) {
        if (!visited[stringify(n)]) {
          queue.push(n);
        }
      }
    }
  }

  return image;
};

function getNeighbors(image, oldColor, row, col) {
  const neighbors = [];

  if (row - 1 >= 0 && image[row - 1][col] === oldColor) {
    neighbors.push({ sr: row - 1, sc: col });
  }

  if (row + 1 < image.length && image[row + 1][col] === oldColor) {
    neighbors.push({ sr: row + 1, sc: col });
  }

  if (col - 1 >= 0 && image[row][col - 1] === oldColor) {
    neighbors.push({ sr: row, sc: col - 1 });
  }

  if (col + 1 < image[row].length && image[row][col + 1] === oldColor) {
    neighbors.push({ sr: row, sc: col + 1 });
  }

  return neighbors;
}

function stringify(node) {
  return `${node.sr}-${node.sc}`;
}

module.exports = { floodFill };
