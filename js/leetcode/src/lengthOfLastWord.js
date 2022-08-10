const lengthOfLastWord = function (s) {
  let length = 0;
  let i = 0;

  while (i < s.length) {
    while (s[i] === ' ') {
      i++;
    }

    let j = i;
    while (s[j] !== ' ' && j < s.length) {
      j++;
    }

    j--;

    const currLen = j - i + 1;
    if (currLen > 0) {
      length = currLen;
    }

    i = j + 1;
  }

  return length;
};

module.exports = { lengthOfLastWord };
