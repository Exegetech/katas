const { AutocompleteSystem } = require('../src/designSearchAutocompleteSystem');

test('AutocompleteSystem', () => {
  const obj = new AutocompleteSystem(
    ['i love you', 'island', 'iroman', 'i love leetcode'],
    [5, 3, 2, 2]
  );

  expect(obj.input('i')).toEqual(['i love you', 'island', 'i love leetcode']);

  expect(obj.input(' ')).toEqual(['i love you', 'i love leetcode']);

  expect(obj.input('a')).toEqual([]);
  expect(obj.input('#')).toEqual([]);
});

test('AutocompleteSystem', () => {
  const obj = new AutocompleteSystem(
    ['i love you', 'island', 'iroman', 'i love leetcode'],
    [5, 3, 2, 2]
  );

  expect(obj.input('i')).toEqual(['i love you', 'island', 'i love leetcode']);

  expect(obj.input(' ')).toEqual(['i love you', 'i love leetcode']);

  expect(obj.input('a')).toEqual([]);
  expect(obj.input('#')).toEqual([]);

  expect(obj.input('i')).toEqual(['i love you', 'island', 'i love leetcode']);

  expect(obj.input(' ')).toEqual(['i love you', 'i love leetcode', 'i a']);

  expect(obj.input('a')).toEqual(['i a']);

  expect(obj.input('#')).toEqual([]);

  expect(obj.input('i')).toEqual(['i love you', 'island', 'i a']);

  expect(obj.input(' ')).toEqual(['i love you', 'i a', 'i love leetcode']);

  expect(obj.input('a')).toEqual(['i a']);

  expect(obj.input('#')).toEqual([]);
});
