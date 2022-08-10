from typing import List, Optional
from unittest import TestCase
from dataclasses import dataclass

from lib.helpers.int_list_node import ListNode
from lib.problems.p0021_merge_two_sorted_lists.merge_two_sorted_lists import Solution


class Test_merge_two_sorted_lists(TestCase):
    def test_merge_two_sorted_lists(self):
        @dataclass
        class TestCase:
            list1: Optional[ListNode]
            list2: Optional[ListNode]
            output: Optional[ListNode]

        test_cases = [
            TestCase(
                list1=ListNode.from_list([1, 2, 4]),
                list2=ListNode.from_list([1, 3, 4]),
                output=ListNode.from_list([1, 1, 2, 3, 4, 4]),
            ),
            TestCase(
                list1=ListNode.from_list([]),
                list2=ListNode.from_list([]),
                output=ListNode.from_list([]),
            ),
            TestCase(
                list1=ListNode.from_list([]),
                list2=ListNode.from_list([0]),
                output=ListNode.from_list([0]),
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.mergeTwoLists(case.list1, case.list2)
            self.assertEqual(result, case.output)
