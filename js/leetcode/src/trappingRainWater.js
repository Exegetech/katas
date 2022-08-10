const trap = function (height) {
  let maxLeftSoFar = Number.NEGATIVE_INFINITY;

  const maxLeft = new Array(height.length).fill(0);
  for (let i = 0; i < height.length; i++) {
    maxLeftSoFar = Math.max(maxLeftSoFar, height[i]);
    maxLeft[i] = maxLeftSoFar;
  }

  let maxRightSoFar = Number.NEGATIVE_INFINITY;
  const maxRight = new Array(height.length).fill(0);
  for (let i = height.length - 1; i >= 0; i--) {
    maxRightSoFar = Math.max(maxRightSoFar, height[i]);
    maxRight[i] = maxRightSoFar;
  }

  let volumes = 0;
  for (let i = 0; i < height.length; i++) {
    const minWallHeight = Math.min(maxLeft[i], maxRight[i]);

    const volume = minWallHeight - height[i];

    if (volume > 0) {
      volumes += volume;
    }
  }

  return volumes;
};

module.exports = { trap };
