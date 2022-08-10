from typing import List


class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        temp = set()
        for i in nums1:
            temp.add(i)

        result = set()
        for i in nums2:
            if i in temp:
                result.add(i)

        return list(result)
