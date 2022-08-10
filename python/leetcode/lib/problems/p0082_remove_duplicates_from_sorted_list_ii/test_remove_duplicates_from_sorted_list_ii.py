from typing import List, Optional
from unittest import TestCase
from dataclasses import dataclass

from lib.helpers.int_list_node import ListNode
from lib.problems.p0082_remove_duplicates_from_sorted_list_ii.remove_duplicates_from_sorted_list_ii import (
    Solution,
)


class Test_remove_duplicates_from_sorted_list_ii(TestCase):
    def test_remove_duplicates_from_sorted_list_ii(self):
        @dataclass
        class TestCase:
            head: Optional[ListNode]
            output: Optional[ListNode]

        test_cases = [
            TestCase(
                head=ListNode.from_list([1, 2, 3, 4, 5]),
                output=ListNode.from_list([1, 2, 3, 4, 5]),
            ),
            TestCase(
                head=ListNode.from_list([1, 1, 1, 2, 3]),
                output=ListNode.from_list([2, 3]),
            ),
            TestCase(
                head=ListNode.from_list([1, 2, 3, 3, 3]),
                output=ListNode.from_list([1, 2]),
            ),
            TestCase(
                head=ListNode.from_list([1, 2, 3, 3, 4, 4, 5]),
                output=ListNode.from_list([1, 2, 5]),
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.deleteDuplicates(case.head)
            self.assertEqual(result, case.output)
