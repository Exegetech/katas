const generateParenthesis = function (n) {
  const result = [];
  const stack = [];

  recurse(result, stack, n, n);

  return result;
};

function recurse(result, stack, leftRemaining, rightRemaining) {
  if (leftRemaining === 0 && rightRemaining === 0) {
    result.push(stack.join(''));
    return;
  }

  if (leftRemaining === 0) {
    stack.push(')');
    recurse(result, stack, leftRemaining, rightRemaining - 1);
    stack.pop();
    return;
  }

  stack.push('(');
  recurse(result, stack, leftRemaining - 1, rightRemaining);
  stack.pop();

  if (leftRemaining < rightRemaining) {
    stack.push(')');
    recurse(result, stack, leftRemaining, rightRemaining - 1);
    stack.pop();
  }
}

module.exports = { generateParenthesis };
