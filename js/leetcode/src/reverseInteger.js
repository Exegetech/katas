const reverse = function (x) {
  let negative = false;
  if (x < 0) {
    negative = true;
  }

  let num = Math.abs(x);
  let reversed = 0;

  while (num > 0) {
    const remainder = num % 10;

    reversed = reversed * 10 + remainder;

    num = Math.floor(num / 10);
  }

  if (negative) {
    return -1 * reversed;
  }

  return reversed;
};

// Input: 1534236469
// Output: 9646324351
// Expected: 0

module.exports = { reverse };
