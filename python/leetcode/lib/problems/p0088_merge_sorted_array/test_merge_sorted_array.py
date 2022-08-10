from typing import List
from unittest import TestCase, skip
from dataclasses import dataclass

from lib.problems.p0088_merge_sorted_array.merge_sorted_array import Solution


class Test_merge_sorted_array(TestCase):
    @skip("skip")
    def test_merge_sorted_array(self):
        @dataclass
        class TestCase:
            nums1: List[int]
            m: int
            nums2: List[int]
            n: int
            output: List[int]

        test_cases = [
            TestCase(
                nums1=[1, 2, 3, 0, 0, 0],
                m=3,
                nums2=[2, 5, 6],
                n=3,
                output=[1, 2, 2, 3, 5, 6],
            ),
            TestCase(
                nums1=[1],
                m=1,
                nums2=[],
                n=0,
                output=[1],
            ),
            TestCase(
                nums1=[0],
                m=0,
                nums2=[1],
                n=1,
                output=[1],
            ),
        ]

        s = Solution()

        for case in test_cases:
            s.merge(case.nums1, case.m, case.nums2, case.n)
            self.assertEqual(nums1, case.output)
