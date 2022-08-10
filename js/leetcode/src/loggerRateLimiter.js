const Logger = function () {
  this.dict = {};
  this.delay = 10;
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (typeof this.dict[message] === 'undefined') {
    this.dict[message] = timestamp;
    return true;
  }

  if (this.dict[message] + this.delay <= timestamp) {
    this.dict[message] = timestamp;
    return true;
  }

  return false;
};

module.exports = { Logger };
