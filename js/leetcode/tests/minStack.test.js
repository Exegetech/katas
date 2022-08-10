const { MinStack } = require('../src/minStack');

test('1', () => {
  const minStack = new MinStack();

  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  expect(minStack.getMin()).toEqual(-3);
  minStack.pop();
  expect(minStack.top()).toEqual(0);
  expect(minStack.getMin()).toEqual(-2);
});
