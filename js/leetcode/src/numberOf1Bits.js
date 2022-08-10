const cache = new Map();

const hammingWeight = function (n) {
  if (n === 0) {
    return 0;
  }

  if (cache.has(n)) {
    return cache.get(n);
  }

  let oneCount = 0;

  while (n > 0) {
    const remainder = n % 2;

    if (remainder === 1) {
      oneCount++;
    }

    n = Math.floor(n / 2);
  }

  cache.set(n, oneCount);

  return cache.get(n);
};

module.exports = { hammingWeight };
