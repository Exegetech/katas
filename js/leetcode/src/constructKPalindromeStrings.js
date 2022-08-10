const canConstruct = function (s, k) {
  if (k === 1) {
    if (s.length === 1) {
      return true;
    }

    return canMakePalindrome(s);
  }

  for (let i = 1; i < s.length; i++) {
    const leftSubStr = s.substring(0, i);

    if (canMakePalindrome(leftSubStr)) {
      const rightSubStr = s.substring(i);

      if (canConstruct(rightSubStr, k - 1)) {
        return true;
      }
    }
  }

  return false;
};

function canMakePalindrome(s) {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set.delete(s[i]);
    } else {
      set.add(s[i]);
    }
  }

  return set.size === 0 || set.size === 1;
}

module.exports = { canConstruct };
