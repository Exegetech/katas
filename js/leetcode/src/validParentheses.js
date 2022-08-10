const isValid = (s) => {
  if (s.length <= 1) {
    return false;
  }

  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    switch (ch) {
      case '[':
      case '{':
      case '(':
        stack.push(ch);
        continue;

      case ']':
      case '}':
      case ')':
        if (stack.length < 1) {
          return false;
        }

        if (
          (ch === ']' && stack[stack.length - 1] === '[') ||
          (ch === '}' && stack[stack.length - 1] === '{') ||
          (ch === ')' && stack[stack.length - 1] === '(')
        ) {
          stack.pop();
        } else {
          return false;
        }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};

module.exports = { isValid };
