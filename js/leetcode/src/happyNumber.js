const isHappy = function (n) {
  const set = new Set();

  let num = n;

  while (num > 1) {
    if (set.has(num)) {
      return false;
    }

    set.add(num);
    num = makeHappy(num);
  }

  return num === 1;
};

function makeHappy(n) {
  let sum = 0;

  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }

  return sum;
}

module.exports = { isHappy };
