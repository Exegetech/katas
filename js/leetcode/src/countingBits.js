const countBits = function (n) {
  const result = [];
  const hammingWeight = makeHammingWeight();

  for (let i = 0; i <= n; i++) {
    result.push(hammingWeight(i));
  }

  return result;
};

function makeHammingWeight() {
  const cache = new Map();

  return function hammingWeight(n) {
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
}

module.exports = { countBits };
