const { MyQueue } = require('../src/implementQueueUsingStack');

test('1', () => {
  const myQueue = new MyQueue();
  myQueue.push(1);
  myQueue.push(2);
  expect(myQueue.peek()).toEqual(1);
  expect(myQueue.pop()).toEqual(1);
  expect(myQueue.empty()).toEqual(false);
});
