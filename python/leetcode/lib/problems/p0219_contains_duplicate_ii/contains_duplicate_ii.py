from typing import List


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        dictionary = {}
        for i in range(len(nums)):
            n = nums[i]
            j = dictionary.get(n)

            if j != None and i != j and abs(i - j) <= k:
                return True

            dictionary[n] = i

        return False
