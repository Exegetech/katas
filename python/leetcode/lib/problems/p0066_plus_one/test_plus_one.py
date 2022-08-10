from typing import List
from unittest import TestCase
from dataclasses import dataclass

from lib.problems.p0066_plus_one.plus_one import Solution


class Test_plus_one(TestCase):
    def test_plus_one(self):
        @dataclass
        class TestCase:
            digits: List[int]
            output: List[int]

        test_cases = [
            TestCase(
                digits=[1, 2, 3],
                output=[1, 2, 4],
            ),
            TestCase(
                digits=[4, 3, 2, 1],
                output=[4, 3, 2, 2],
            ),
            TestCase(
                digits=[9],
                output=[1, 0],
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.plusOne(case.digits)
            self.assertEqual(result, case.output)
