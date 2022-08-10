from unittest import TestCase
from dataclasses import dataclass

from lib.problems.p0387_first_unique_character_in_a_string.first_unique_character_in_a_string import Solution


class Test_first_unique_character_in_a_string(TestCase):
    def test_first_unique_character_in_a_string(self):
        @dataclass
        class TestCase:
            s: str
            output: int

        test_cases = [
            TestCase(
                s="leetcode",
                output=0,
            ),
            TestCase(
                s="loveleetcode",
                output=2,
            ),
            TestCase(
                s="aabb",
                output=-1,
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.firstUniqChar(case.s)
            self.assertEqual(result, case.output)
