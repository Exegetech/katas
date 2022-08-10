function guess() {
  // Implemented by Leetcode
}

const guessNumber = function (n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guessed = guess(mid);

    if (guessed === 0) {
      return mid;
    }

    if (guessed === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};

module.exports = { guessNumber };
