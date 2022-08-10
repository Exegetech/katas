const lengthOfLongestSubstringTwoDistinct = function (s) {
  const set = new Set();

  let maxLength = 0;
  const left = 0;

  for (let right = 0; right < s.length; right++) {
    console.log({ left, right });
    // while (set.size > 2) {
    //   set.delete(s[left])
    //   left++
    // }
    // console.log({ left, right })

    set.add(s[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

module.exports = { lengthOfLongestSubstringTwoDistinct };
