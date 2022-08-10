const { MyHashSet } = require('../src/designHashSet');

test('1', () => {
  const myHashSet = new MyHashSet();
  myHashSet.add(1);
  myHashSet.add(2);
  expect(myHashSet.contains(1)).toEqual(true);
  expect(myHashSet.contains(3)).toEqual(false);
  myHashSet.add(2);
  expect(myHashSet.contains(2)).toEqual(true);
  // myHashSet.remove(2);
  // expect(myHashSet.contains(2)).toEqual(false);
});
