const { MyCircularQueue } = require('../src/designCircularQueue');

test('1', () => {
  const myCircularQueue = new MyCircularQueue(3);
  expect(myCircularQueue.enQueue(1)).toBe(true);
  expect(myCircularQueue.enQueue(2)).toBe(true);
  expect(myCircularQueue.enQueue(3)).toBe(true);
  expect(myCircularQueue.enQueue(4)).toBe(false);
  expect(myCircularQueue.Rear()).toBe(3);
  expect(myCircularQueue.isFull()).toBe(true);
  expect(myCircularQueue.deQueue()).toBe(true);
  expect(myCircularQueue.enQueue(4)).toBe(true);
  expect(myCircularQueue.Rear()).toBe(4);
});

test('2', () => {
  const myCircularQueue = new MyCircularQueue(6);
  expect(myCircularQueue.enQueue(6)).toBe(true);
  expect(myCircularQueue.Rear()).toBe(6);
  expect(myCircularQueue.Rear()).toBe(6);
  expect(myCircularQueue.deQueue()).toBe(true);
  expect(myCircularQueue.enQueue(5)).toBe(true);
  expect(myCircularQueue.Rear()).toBe(5);
  expect(myCircularQueue.deQueue()).toBe(true);
  expect(myCircularQueue.Front()).toBe(-1);
  expect(myCircularQueue.deQueue()).toBe(false);
  expect(myCircularQueue.deQueue()).toBe(false);
  expect(myCircularQueue.deQueue()).toBe(false);
});
