const palindromePairs = function (words) {
  const pairs = [];

  words.forEach((wordI, i) => {
    words.forEach((wordJ, j) => {
      if (i !== j) {
        const word = wordI + wordJ;
        if (isPalindrome(word)) {
          pairs.push([i, j]);
        }
      }
    });
  });

  return pairs;
};

function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

module.exports = { palindromePairs };
