# Table Template

```js
const { twoSum } = require('../src/twoSumII')

const cases = [
  {
    numbers: [-1,0],
    target: -1,
    output: [1,2],
  },
]

test.each(cases)("twoSum", ({ numbers, target, output }) => {
  expect(twoSum(numbers, target)).toEqual(output)
})
```js
