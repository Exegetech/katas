const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const currArea = calcArea(height, left, right);
    maxArea = Math.max(maxArea, currArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

function calcArea(height, left, right) {
  const w = right - left;
  const h = Math.min(height[right], height[left]);

  return w * h;
}

module.exports = { maxArea };
