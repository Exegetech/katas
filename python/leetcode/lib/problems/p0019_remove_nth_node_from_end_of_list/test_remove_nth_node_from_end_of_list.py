from typing import List, Optional
from unittest import TestCase
from dataclasses import dataclass

from lib.helpers.int_list_node import ListNode
from lib.problems.p0019_remove_nth_node_from_end_of_list.remove_nth_node_from_end_of_list import (
    Solution,
)


class Test_remove_nth_node_from_end_of_list(TestCase):
    def test_remove_nth_node_from_end_of_list(self):
        @dataclass
        class TestCase:
            head: Optional[ListNode]
            n: int
            output: Optional[ListNode]

        test_cases = [
            TestCase(
                head=ListNode.from_list([1]),
                n=1,
                output=ListNode.from_list([]),
            ),
            TestCase(
                head=ListNode.from_list([1, 2]),
                n=1,
                output=ListNode.from_list([1]),
            ),
            TestCase(
                head=ListNode.from_list([1, 2, 3, 4, 5]),
                n=2,
                output=ListNode.from_list([1, 2, 3, 5]),
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.removeNthFromEnd(case.head, case.n)
            self.assertEqual(result, case.output)
