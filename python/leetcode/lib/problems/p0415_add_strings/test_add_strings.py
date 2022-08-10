from typing import List
from unittest import TestCase
from dataclasses import dataclass

from lib.problems.p0415_add_strings.add_strings import Solution


class Test_add_strings(TestCase):
    def test_add_strings(self):
        @dataclass
        class TestCase:
            num1: str
            num2: str
            output: str

        test_cases = [
            TestCase(
                num1="11",
                num2="123",
                output="134",
            ),
            TestCase(
                num1="456",
                num2="77",
                output="533",
            ),
            TestCase(
                num1="0",
                num2="0",
                output="0",
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.addStrings(case.num1, case.num2)
            self.assertEqual(result, case.output)
