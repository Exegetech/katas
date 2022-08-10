const { MyStack } = require('../src/implementStackUsingQueue');

test('1', () => {
  const myStack = new MyStack();
  myStack.push(1);
  myStack.push(2);
  expect(myStack.top()).toEqual(2);
  expect(myStack.pop()).toEqual(2);
  expect(myStack.empty()).toEqual(false);
});
