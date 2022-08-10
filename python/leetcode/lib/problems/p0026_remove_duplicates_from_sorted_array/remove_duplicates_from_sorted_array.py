from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        pointer = 0
        for i in range(0, len(nums)):
            if i > 0 and nums[pointer] != nums[i]:
                pointer += 1
                nums[pointer] = nums[i]

        return pointer + 1
