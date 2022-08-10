const checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) {
    return false;
  }

  const dict1 = {};
  for (let i = 0; i < s1.length; i++) {
    if (typeof dict1[s1[i]] === 'undefined') {
      dict1[s1[i]] = 1;
    } else {
      dict1[s1[i]] += 1;
    }
  }

  const dict2 = {};
  for (let i = 0; i < s2.length; i++) {
    if (typeof dict2[s2[i]] === 'undefined') {
      dict2[s2[i]] = 1;
    } else {
      dict2[s2[i]] += 1;
    }

    if (i >= s1.length) {
      if (dict2[s2[i - s1.length]] === 1) {
        delete dict2[s2[i - s1.length]];
      } else {
        dict2[s2[i - s1.length]] -= 1;
      }
    }

    if (same(dict1, dict2)) {
      return true;
    }
  }

  return false;
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

module.exports = { checkInclusion };
