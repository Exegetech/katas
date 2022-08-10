const RandomizedSet = function () {
  this.valIndexDict = {};
  this.vals = [];
};

RandomizedSet.prototype.insert = function (val) {
  if (typeof this.valIndexDict[val] !== 'undefined') {
    return false;
  }

  this.vals.push(val);
  const valIndex = this.vals.length - 1;

  this.valIndexDict[val] = valIndex;

  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (typeof this.valIndexDict[val] === 'undefined') {
    return false;
  }

  // Swap val to last position in the list
  // so that list can just pop with O(1)
  const valIndex = this.valIndexDict[val];

  const tempIdx = this.vals.length - 1;
  const tempVal = this.vals[tempIdx];

  this.vals[valIndex] = tempVal;
  this.vals[tempIdx] = val;

  this.vals.pop();

  this.valIndexDict[tempVal] = valIndex;
  delete this.valIndexDict[val];

  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const randomIdx = Math.floor(Math.random() * this.vals.length);

  return this.vals[randomIdx];
};

module.exports = { RandomizedSet };
