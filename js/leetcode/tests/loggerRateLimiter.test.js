const { Logger } = require('../src/loggerRateLimiter');

test('1', () => {
  const logger = new Logger();
  expect(logger.shouldPrintMessage(1, 'foo')).toEqual(true);
  expect(logger.shouldPrintMessage(2, 'bar')).toEqual(true);
  expect(logger.shouldPrintMessage(3, 'foo')).toEqual(false);
  expect(logger.shouldPrintMessage(8, 'bar')).toEqual(false);
  expect(logger.shouldPrintMessage(10, 'foo')).toEqual(false);
  expect(logger.shouldPrintMessage(11, 'foo')).toEqual(true);
});
