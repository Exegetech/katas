from typing import List
from unittest import TestCase
from dataclasses import dataclass

from lib.problems.p0026_remove_duplicates_from_sorted_array.remove_duplicates_from_sorted_array import (
    Solution,
)


class Test_remove_duplicates_from_sorted_array(TestCase):
    def test_remove_duplicates_from_sorted_array(self):
        @dataclass
        class TestCase:
            nums: List[int]
            output: int
            expected: List[int]

        test_cases = [
            TestCase(
                nums=[1, 1, 2],
                output=2,
                expected=[1, 2],
            ),
            TestCase(
                nums=[0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
                output=5,
                expected=[0, 1, 2, 3, 4],
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.removeDuplicates(case.nums)
            self.assertEqual(result, case.output)
            self.assertEqual(case.nums[:result], case.expected)
