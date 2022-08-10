const {
  findCircleNum,
  findCircleNum2,
  findCircleNum3,
} = require('../src/numberOfProvinces');

const cases = [
  {
    isConnected: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ],
    output: 2,
  },
  {
    isConnected: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    output: 3,
  },
];

test.each(cases)('findCircleNum', ({ isConnected, output }) => {
  expect(findCircleNum(isConnected)).toEqual(output);
});

test.each(cases)('findCircleNum2', ({ isConnected, output }) => {
  expect(findCircleNum2(isConnected)).toEqual(output);
});

test.each(cases)('findCircleNum3', ({ isConnected, output }) => {
  expect(findCircleNum3(isConnected)).toEqual(output);
});
