const { furthestBuilding } = require('../src/furthestBuildingYouCanReach');

const cases = [
  {
    heights: [4, 2, 7, 6, 9, 14, 12],
    bricks: 5,
    ladders: 1,
    output: 4,
  },
  {
    heights: [4, 12, 2, 7, 3, 18, 20, 3, 19],
    bricks: 10,
    ladders: 2,
    output: 7,
  },
  {
    heights: [14, 3, 19, 3],
    bricks: 17,
    ladders: 0,
    output: 3,
  },
];

test.skip.each(cases)(
  'furthestBuilding',
  ({ heights, bricks, ladders, output }) => {
    expect(furthestBuilding(heights, bricks, ladders, target)).toEqual(output);
  }
);
