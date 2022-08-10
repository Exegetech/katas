const firstUniqChar = function (s) {
  const dict = {};
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (typeof dict[ch] === 'undefined') {
      dict[ch] = 1;
    } else {
      dict[ch] += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

module.exports = { firstUniqChar };
