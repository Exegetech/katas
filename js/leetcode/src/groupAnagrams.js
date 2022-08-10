const groupAnagrams = function (strs) {
  const dict = {};

  strs.forEach((str) => {
    const key = str.split('').sort().join('');
    if (typeof dict[key] === 'undefined') {
      dict[key] = [str];
    } else {
      dict[key].push(str);
    }
  });

  return Object.values(dict);
};

module.exports = { groupAnagrams };
