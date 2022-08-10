const numJewelsInStones = function (jewels, stones) {
  const set = new Set();
  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels[i]);
  }

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) {
      count++;
    }
  }

  return count;
};

module.exports = { numJewelsInStones };
