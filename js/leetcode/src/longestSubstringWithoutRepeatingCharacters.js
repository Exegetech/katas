const lengthOfLongestSubstring = function (s) {
  const set = new Set();

  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    while (set.has(ch)) {
      set.delete(s[left]);
      left++;
    }

    set.add(ch);

    max = Math.max(max, right - left + 1);
  }

  return max;
};

module.exports = { lengthOfLongestSubstring };
