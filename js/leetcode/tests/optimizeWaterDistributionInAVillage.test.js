const {
  minCostToSupplyWater,
} = require('../src/optimizeWaterDistributionInAVillage');

const cases = [
  {
    n: 3,
    wells: [1, 2, 2],
    pipes: [
      [1, 2, 1],
      [2, 3, 1],
    ],
    output: 3,
  },
  {
    n: 2,
    wells: [1, 1],
    pipes: [
      [1, 2, 1],
      [1, 2, 2],
    ],
    output: 2,
  },
  {
    n: 5,
    wells: [46012, 72474, 64965, 751, 33304],
    pipes: [
      [2, 1, 6719],
      [3, 2, 75312],
      [5, 3, 44918],
    ],
    output: 131704,
  },
];

test.each(cases)('minCostToSupplyWater', ({ n, wells, pipes, output }) => {
  expect(minCostToSupplyWater(n, wells, pipes)).toEqual(output);
});
