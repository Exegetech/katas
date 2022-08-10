from typing import List
from unittest import TestCase
from dataclasses import dataclass

from lib.problems.p0217_contains_duplicate.contains_duplicate import Solution


class Test_contains_duplicate(TestCase):
    def test_contains_duplicate(self):
        @dataclass
        class TestCase:
            nums: List[int]
            output: bool

        test_cases = [
            TestCase(
                nums=[1, 2, 3, 1],
                output=True,
            ),
            TestCase(
                nums=[1, 2, 3, 4],
                output=False,
            ),
            TestCase(
                nums=[1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
                output=True,
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.containsDuplicate(case.nums)
            self.assertEqual(result, case.output)
