const isPerfectSquare = function (num) {
  if (num < 2) {
    return true;
  }

  let left = 2;
  let right = num;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const n = mid * mid;

    if (n === num) {
      return true;
    }

    if (n > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

module.exports = { isPerfectSquare };
