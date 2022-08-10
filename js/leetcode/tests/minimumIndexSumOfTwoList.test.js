const { findRestaurant } = require('../src/minimumIndexSumOfTwoList');

test('1', () => {
  const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
  const list2 = [
    'Piatti',
    'The Grill at Torrey Pines',
    'Hungry Hunter Steakhouse',
    'Shogun',
  ];
  const output = ['Shogun'];

  expect(findRestaurant(list1, list2)).toEqual(output);
});

test('2', () => {
  const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
  const list2 = ['KFC', 'Shogun', 'Burger King'];
  const output = ['Shogun'];

  expect(findRestaurant(list1, list2)).toEqual(output);
});

test('3', () => {
  const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
  const list2 = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'];
  const output = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];

  expect(findRestaurant(list1, list2)).toEqual(output);
});
