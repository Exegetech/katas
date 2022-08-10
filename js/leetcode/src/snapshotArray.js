const SnapshotArray = function (length) {
  this.snapId = 0;

  this.arr = new Array(length).fill(0).map(() => [
    {
      snapId: this.snapId,
      value: 0,
    },
  ]);
};

SnapshotArray.prototype.set = function (index, val) {
  const snapshots = this.arr[index];

  const latest = snapshots[snapshots.length - 1];

  if (latest.snapId === this.snapId) {
    latest.value = val;
  } else {
    snapshots.push({
      snapId: this.snapId,
      value: val,
    });
  }
};

SnapshotArray.prototype.snap = function () {
  const snapId = this.snapId;
  this.snapId++;

  return snapId;
};

SnapshotArray.prototype.get = function (index, snapId) {
  const snapshots = this.arr[index];
  const snapshot = this._search(snapshots, snapId);

  return snapshot.value;
};

SnapshotArray.prototype._search = function (snapshots, snapId) {
  let i = 0;
  while (i < snapshots.length) {
    if (snapshots[i].snapId === snapId) {
      return snapshots[i];
    }

    if (snapshots[i].snapId > snapId) {
      break;
    }

    i++;
  }

  return snapshots[i - 1];
};

module.exports = { SnapshotArray };
