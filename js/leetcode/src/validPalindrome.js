const isPalindrome = function (s) {
  const regex = /[a-zA-Z0-9]+/;

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (!regex.test(s[i])) {
      i++;
    }

    while (!regex.test(s[j])) {
      j--;
    }

    if (i > j) {
      return true;
    }

    const ci = s[i].toLowerCase();
    const cj = s[j].toLowerCase();

    if (ci !== cj) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

module.exports = { isPalindrome };
