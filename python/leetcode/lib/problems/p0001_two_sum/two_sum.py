from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dic = {}

        for i in range(len(nums)):
            n = nums[i]
            remainder = target - n
            remainderIdx = dic.get(remainder)

            if remainderIdx != None:
                return [remainderIdx, i]

            dic[n] = i

        return [-1, -1]
