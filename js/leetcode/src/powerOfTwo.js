const isPowerOfTwo = function (n) {
  if (n === 1) {
    return true;
  }

  return isPowerOfTwo(n / 2);
};

module.exports = { isPowerOfTwo };
