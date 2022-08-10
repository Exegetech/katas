const longestCommonPrefix = function (strs) {
  const result = [];
  const longest = strs.reduce((acc, el) => Math.max(acc, el.length), 0);

  for (let charIdx = 0; charIdx < longest; charIdx++) {
    for (let wordIdx = 0; wordIdx < strs.length - 1; wordIdx++) {
      if (
        charIdx >= strs[wordIdx].length ||
        charIdx >= strs[wordIdx + 1].length
      ) {
        return result.join('');
      }

      if (strs[wordIdx][charIdx] !== strs[wordIdx + 1][charIdx]) {
        return result.join('');
      }
    }

    result.push(strs[0][charIdx]);
  }

  return result.join('');
};

// const strs = ["dog","racecar","car"]
const strs = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strs));
