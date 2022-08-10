const wordBreak = function (s, wordDict) {
  const memo = {};

  return recurse(s, wordDict, memo, s.length - 1);
};

function recurse(s, wordDict, memo, index) {
  if (index < -1) {
    return false;
  }

  if (index === -1) {
    return true;
  }

  if (typeof memo[index] !== 'undefined') {
    return memo[index];
  }

  let partitionable = false;
  wordDict.forEach((word) => {
    const substrFromEnd = s.substring(index + 1 - word.length, index + 1);

    if (substrFromEnd === word) {
      const subResult = recurse(s, wordDict, memo, index - word.length);

      partitionable = partitionable || subResult;
    }
  });

  memo[index] = partitionable;

  return memo[index];
}

module.exports = { wordBreak };
