from typing import List
from unittest import TestCase
from dataclasses import dataclass

from lib.problems.p0349_intersection_of_two_arrays.intersection_of_two_arrays import Solution


class Test_intersection_of_two_arrays(TestCase):
    def test_intersection_of_two_arrays(self):
        @dataclass
        class TestCase:
            nums1: List[int]
            nums2: List[int]
            output: List[int]

        test_cases = [
            TestCase(
                nums1=[1,2,2,1],
                nums2=[2,2],
                output=[2],
            ),
            TestCase(
                nums1=[4,9,5],
                nums2=[9,4,9,8,4],
                output=[9,4],
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.intersection(case.nums1, case.nums2)
            self.assertEqual(result, case.output)
