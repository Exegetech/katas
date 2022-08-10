const mySqrt = function (x) {
  if (x < 2) {
    return x;
  }

  let left = 2;
  let right = x;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const num = mid * mid;

    if (num === x) {
      return mid;
    }

    if (num > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // Not exactly getting the precise value but
  // rounding the number down.
  // Hence we need to take the smaller of 2 values between
  // left or right.
  // When we exit the loop, the condition is left > right
  // This means right is the smaller value.

  return right;
};

module.exports = { mySqrt };
