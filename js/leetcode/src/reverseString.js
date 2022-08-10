const reverseString = function (s) {
  let front = 0;
  let back = s.length - 1;

  while (front < back) {
    const temp = s[front];
    s[front] = s[back];
    s[back] = temp;

    front++;
    back--;
  }
};

// Using recursion
const reverseString2 = function (s) {
  recurse(s, 0, s.length - 1);
  return s;
};

function recurse(s, i, j) {
  if (i >= j) {
    return;
  }

  const temp = s[i];
  s[i] = s[j];
  s[j] = temp;

  recurse(s, i + 1, j - 1);
}

module.exports = { reverseString, reverseString2 };
