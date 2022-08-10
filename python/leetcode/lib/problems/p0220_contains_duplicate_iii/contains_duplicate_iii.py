from typing import List


class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        for i in range(len(nums)):
            for l in range(1, k + 1):
                j = i + l
                if j < len(nums) and abs(nums[i] - nums[j]) <= t:
                    return True

        return False
