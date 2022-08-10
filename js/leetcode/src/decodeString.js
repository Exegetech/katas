const decodeString = function (s) {
  const stack = [];

  let i = 0;
  while (i < s.length) {
    while (i < s.length && s[i] !== ']') {
      stack.push(s[i]);
      i++;
    }

    const chArr = [];
    while (stack.length > 0 && stack[stack.length - 1] !== '[') {
      chArr.push(stack.pop());
    }

    // Throw '['
    stack.pop();

    const numArr = [];
    while (stack.length > 0 && isNumChr(stack[stack.length - 1])) {
      numArr.push(stack.pop());
    }

    const multipliedArr = multiply(chArr.reverse(), numArr.reverse());
    multipliedArr.forEach((el) => stack.push(el));

    // skip ']'
    i++;
  }

  return stack.join('');
};

function multiply(chArr, numArr) {
  const num = numArr.length === 0 ? 1 : parseInt(numArr.join(''));
  let result = [];

  for (let i = 0; i < num; i++) {
    result = result.concat(chArr);
  }

  return result;
}

function isNumChr(c) {
  return /[0-9]/.test(c);
}

module.exports = { decodeString };
