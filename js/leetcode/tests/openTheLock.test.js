const { openLock } = require('../src/openTheLock');

test('1', () => {
  const deadends = [];
  const target = '0000';
  const output = 0;

  expect(openLock(deadends, target)).toEqual(output);
});

test('2', () => {
  const deadends = [];
  const target = '0001';
  const output = 1;

  expect(openLock(deadends, target)).toEqual(output);
});

test('3', () => {
  const deadends = ['8888'];
  const target = '0009';
  const output = 1;

  expect(openLock(deadends, target)).toEqual(output);
});

test('4', () => {
  const deadends = ['0201', '0101', '0102', '1212', '2002'];
  const target = '0202';
  const output = 6;

  expect(openLock(deadends, target)).toEqual(output);
});

test('5', () => {
  const deadends = [
    '8887',
    '8889',
    '8878',
    '8898',
    '8788',
    '8988',
    '7888',
    '9888',
  ];
  const target = '8888';
  const output = -1;

  expect(openLock(deadends, target)).toEqual(output);
});

test('6', () => {
  const deadends = ['0000'];
  const target = '8888';
  const output = -1;

  expect(openLock(deadends, target)).toEqual(output);
});
