const evalRPN = function (tokens) {
  const stack = [];
  let t1;
  let t2;

  for (const t of tokens) {
    switch (t) {
      case '*':
        t2 = parseInt(stack.pop());
        t1 = parseInt(stack.pop());
        stack.push(t1 * t2);
        break;
      case '/':
        t2 = parseInt(stack.pop());
        t1 = parseInt(stack.pop());
        stack.push(Math.trunc(t1 / t2));
        break;
      case '+':
        t2 = parseInt(stack.pop());
        t1 = parseInt(stack.pop());
        stack.push(t1 + t2);
        break;
      case '-':
        t2 = parseInt(stack.pop());
        t1 = parseInt(stack.pop());
        stack.push(t1 - t2);
        break;
      default:
        stack.push(t);
    }
  }

  return stack.pop();
};

module.exports = { evalRPN };
