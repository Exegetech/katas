const isIsomorphic = function (s, t) {
  const dictst = {};
  const dictts = {};

  for (let i = 0; i < s.length; i++) {
    const sc = s[i];
    const tc = t[i];

    if (typeof dictst[sc] !== 'undefined' && dictst[sc] !== tc) {
      return false;
    }

    if (typeof dictts[tc] !== 'undefined' && dictts[tc] !== sc) {
      return false;
    }

    dictst[sc] = tc;
    dictts[tc] = sc;
  }

  return true;
};

module.exports = { isIsomorphic };
