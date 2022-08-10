from unittest import TestCase
from dataclasses import dataclass

from lib.problems.p0242_valid_anagram.valid_anagram import Solution


class Test_valid_anagram(TestCase):
    def test_valid_anagram(self):
        @dataclass
        class TestCase:
            s: str
            t: str
            output: bool

        test_cases = [
            TestCase(
                s="anagram",
                t="nagaram",
                output=True,
            ),
            TestCase(
                s="rat",
                t="car",
                output=False,
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.isAnagram(case.s, case.t)
            self.assertEqual(result, case.output)
