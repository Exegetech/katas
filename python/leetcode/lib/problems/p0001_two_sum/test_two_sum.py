from unittest import TestCase
from dataclasses import dataclass
from typing import List

from lib.problems.p0001_two_sum.two_sum import Solution


class Test_two_sum(TestCase):
    def test_two_sum(self):
        @dataclass
        class TestCase:
            nums: List[int]
            target: int
            output: List[int]

        test_cases = [
            TestCase(nums=[2, 7, 11, 15], target=9, output=[0, 1]),
            TestCase(nums=[3, 2, 4], target=6, output=[1, 2]),
            TestCase(nums=[3, 3], target=6, output=[0, 1]),
        ]

        s = Solution()

        for case in test_cases:
            self.assertEqual(
                s.twoSum(case.nums, case.target),
                case.output,
            )
