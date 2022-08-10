const strStr = (haystack, needle) => {
  if (needle === '') {
    return 0;
  }

  const hl = haystack.length;
  const nl = needle.length;

  if (hl < nl) {
    return -1;
  }

  for (let i = 0; i <= hl - nl; i++) {
    if (haystack[i] !== needle[0]) {
      continue;
    }

    let found = true;
    for (let j = 0; j < nl; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
      }
    }

    if (found) {
      return i;
    }
  }

  return -1;
};

module.exports = { strStr };
