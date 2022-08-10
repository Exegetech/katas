const findAnagrams = function (s, p) {
  if (s.length < p.length) {
    return [];
  }

  const result = [];

  const pDict = {};
  for (let i = 0; i < p.length; i++) {
    if (typeof pDict[p[i]] === 'undefined') {
      pDict[p[i]] = 1;
    } else {
      pDict[p[i]] += 1;
    }
  }

  const sDict = {};

  for (let i = 0; i < s.length; i++) {
    if (typeof sDict[s[i]] === 'undefined') {
      sDict[s[i]] = 1;
    } else {
      sDict[s[i]] += 1;
    }

    if (i >= p.length) {
      if (sDict[s[i - p.length]] === 1) {
        delete sDict[s[i - p.length]];
      } else {
        sDict[s[i - p.length]] -= 1;
      }
    }

    if (same(sDict, pDict)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
};

function same(dict1, dict2) {
  const dict1Keys = Object.keys(dict1);
  const dict2Keys = Object.keys(dict2);

  if (dict1Keys.length !== dict2Keys.length) {
    return false;
  }

  for (const d1k of dict1Keys) {
    if (typeof dict1[d1k] === 'undefined') {
      return false;
    }

    if (dict1[d1k] !== dict2[d1k]) {
      return false;
    }
  }

  return true;
}

module.exports = { findAnagrams };
