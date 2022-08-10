const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const dict = {};

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (typeof dict[ch] === 'undefined') {
      dict[ch] = 1;
    } else {
      dict[ch] += 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const ch = t[i];

    if (dict[ch] > 1) {
      dict[ch] -= 1;
    } else {
      delete dict[ch];
    }
  }

  return Object.keys(dict).length === 0;
};

module.exports = { isAnagram };
