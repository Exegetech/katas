from typing import List
from unittest import TestCase
from dataclasses import dataclass

from lib.problems.p0219_contains_duplicate_ii.contains_duplicate_ii import Solution


class Test_contains_duplicate_ii(TestCase):
    def test_contains_duplicate_ii(self):
        @dataclass
        class TestCase:
            nums: List[int]
            k: int
            output: bool

        test_cases = [
            TestCase(
                nums=[1, 2, 3, 1],
                k=3,
                output=True,
            ),
            TestCase(
                nums=[1, 0, 1, 1],
                k=1,
                output=True,
            ),
            TestCase(
                nums=[1, 2, 3, 1, 2, 3],
                k=2,
                output=False,
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.containsNearbyDuplicate(case.nums, case.k)
            self.assertEqual(result, case.output)
