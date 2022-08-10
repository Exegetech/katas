const letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const result = [];
  const stack = [];
  recurse(dict, result, stack, digits, 0);

  return result;
};

function recurse(dict, result, stack, digits, idx) {
  if (idx === digits.length) {
    result.push(stack.join(''));
    return;
  }

  const ch = digits[idx];
  const choices = dict[ch];

  for (const choice of choices) {
    stack.push(choice);
    recurse(dict, result, stack, digits, idx + 1);
    stack.pop();
  }
}

module.exports = { letterCombinations };
