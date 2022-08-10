from typing import List, Optional
from unittest import TestCase
from dataclasses import dataclass

from lib.helpers.int_list_node import ListNode
from lib.problems.p0206_reverse_linked_list.reverse_linked_list import Solution


class Test_reverse_linked_list(TestCase):
    def test_reverse_linked_list(self):
        @dataclass
        class TestCase:
            head: ListNode
            output: ListNode

        test_cases = [
            TestCase(
                head=ListNode.from_list([]),
                output=ListNode.from_list([]),
            ),
            TestCase(
                head=ListNode.from_list([1]),
                output=ListNode.from_list([1]),
            ),
            TestCase(
                head=ListNode.from_list([1, 2]),
                output=ListNode.from_list([2, 1]),
            ),
            TestCase(
                head=ListNode.from_list([1, 2, 3]),
                output=ListNode.from_list([3, 2, 1]),
            ),
            TestCase(
                head=ListNode.from_list([1, 2, 3, 4, 5]),
                output=ListNode.from_list([5, 4, 3, 2, 1]),
            ),
            TestCase(
                head=ListNode.from_list([1, 2, 3, 4, 5]),
                output=ListNode.from_list([5, 4, 3, 2, 1]),
            ),
            TestCase(
                head=ListNode.from_list([1, 2, 3, 4, 5]),
                output=ListNode.from_list([5, 4, 3, 2, 1]),
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.reverseList(case.head)
            self.assertEqual(result, case.output)
