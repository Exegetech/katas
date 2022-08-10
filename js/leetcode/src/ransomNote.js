const canConstruct = function (ransomNote, magazine) {
  const dict = {};

  for (let i = 0; i < magazine.length; i++) {
    const ch = magazine[i];
    if (typeof dict[ch] === 'undefined') {
      dict[ch] = 1;
    } else {
      dict[ch] += 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const ch = ransomNote[i];

    if (typeof dict[ch] === 'undefined') {
      return false;
    } else if (dict[ch] > 1) {
      dict[ch] -= 1;
    } else if (dict[ch] === 1) {
      delete dict[ch];
    }
  }

  return true;
};

module.exports = { canConstruct };
