from typing import List
from unittest import TestCase, skip
from dataclasses import dataclass

from lib.problems.p0220_contains_duplicate_iii.contains_duplicate_iii import Solution


class Test_contains_duplicate_iii(TestCase):
    skip("demonstrating skipping")

    def test_contains_duplicate_iii(self):
        @dataclass
        class TestCase:
            nums: List[int]
            k: int
            t: int
            output: bool

        test_cases = [
            TestCase(
                nums=[1, 2, 3, 1],
                k=3,
                t=0,
                output=True,
            ),
            TestCase(
                nums=[1, 0, 1, 1],
                k=1,
                t=2,
                output=True,
            ),
            TestCase(
                nums=[1, 5, 9, 1, 5, 9],
                k=2,
                t=3,
                output=False,
            ),
            TestCase(
                nums=[8, 7, 15, 1, 6, 1, 9, 15],
                k=1,
                t=3,
                output=True,
            ),
            TestCase(
                nums=[1, 2, 1, 1],
                k=1,
                t=0,
                output=True,
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.containsNearbyAlmostDuplicate(case.nums, case.k, case.t)
            self.assertEqual(result, case.output)
