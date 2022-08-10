from typing import List
from unittest import TestCase
from dataclasses import dataclass

from lib.problems.p0344_reverse_string.reverse_string import Solution


class Test_reverse_string(TestCase):
    def test_reverse_string(self):
        @dataclass
        class TestCase:
            s: List[str]
            output: List[str]

        test_cases = [
            TestCase(
                s=["h", "e", "l", "l", "o"],
                output=["o", "l", "l", "e", "h"],
            ),
            TestCase(
                s=["H", "a", "n", "n", "a", "h"],
                output=["h", "a", "n", "n", "a", "H"],
            ),
        ]

        s = Solution()

        for case in test_cases:
            s.reverseString(case.s)
            self.assertEqual(case.s, case.output)
