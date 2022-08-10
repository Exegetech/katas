const licenseKeyFormatting = function (s, k) {
  const chQueue = [];
  let chCount = 0;

  let i = s.length - 1;
  while (i >= 0) {
    const ch = s[i];

    if (ch !== '-') {
      chQueue.unshift(ch.toUpperCase());
      chCount++;

      if (chCount === k) {
        chQueue.unshift('-');
        chCount = 0;
      }
    }

    i--;
  }

  if (chQueue[0] === '-') {
    chQueue.shift();
  }

  return chQueue.join('');
};

module.exports = { licenseKeyFormatting };
