const { SnapshotArray } = require('../src/snapshotArray');

test('SnapshotArray', () => {
  const snapshotArr = new SnapshotArray(3);

  snapshotArr.set(0, 5);
  expect(snapshotArr.snap()).toEqual(0);
  snapshotArr.set(0, 6);
  expect(snapshotArr.get(0, 0)).toEqual(5);
});

test('SnapshotArray', () => {
  const snapshotArr = new SnapshotArray(4);

  expect(snapshotArr.snap()).toEqual(0);
  expect(snapshotArr.snap()).toEqual(1);
  expect(snapshotArr.get(3, 1)).toEqual(0);
  snapshotArr.set(2, 4);
  expect(snapshotArr.snap()).toEqual(2);
  snapshotArr.set(1, 4);
});

test('SnapshotArray', () => {
  const snapshotArr = new SnapshotArray(1);

  snapshotArr.set(0, 15);
  expect(snapshotArr.snap()).toEqual(0);
  expect(snapshotArr.snap()).toEqual(1);
  expect(snapshotArr.snap()).toEqual(2);
  expect(snapshotArr.get(0, 2)).toEqual(15);
  expect(snapshotArr.snap()).toEqual(3);
  expect(snapshotArr.snap()).toEqual(4);
  expect(snapshotArr.get(0, 2)).toEqual(15);
});

test('SnapshotArray', () => {
  const snapshotArr = new SnapshotArray(3);

  snapshotArr.set(1, 5);
  expect(snapshotArr.snap()).toEqual(0);
  expect(snapshotArr.snap()).toEqual(1);
  snapshotArr.set(1, 19);
  snapshotArr.set(0, 4);
  expect(snapshotArr.get(2, 1)).toEqual(0);
  expect(snapshotArr.get(2, 0)).toEqual(0);
  expect(snapshotArr.get(0, 1)).toEqual(0);
});
