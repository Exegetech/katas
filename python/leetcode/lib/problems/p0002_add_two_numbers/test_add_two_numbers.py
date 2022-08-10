from typing import Optional
from unittest import TestCase
from dataclasses import dataclass

from lib.helpers.int_list_node import ListNode
from lib.problems.p0002_add_two_numbers.add_two_numbers import Solution


class Test_add_two_numbers(TestCase):
    def test_add_two_numbers(self):
        @dataclass
        class TestCase:
            l1: Optional[ListNode]
            l2: Optional[ListNode]
            output: Optional[ListNode]

        test_cases = [
            TestCase(
                l1=ListNode.from_list([0]),
                l2=ListNode.from_list([0]),
                output=ListNode.from_list([0]),
            ),
            TestCase(
                l1=ListNode.from_list([9, 1]),
                l2=ListNode.from_list([1]),
                output=ListNode.from_list([0, 2]),
            ),
            TestCase(
                l1=ListNode.from_list([9, 9]),
                l2=ListNode.from_list([9, 9]),
                output=ListNode.from_list([8, 9, 1]),
            ),
            TestCase(
                l1=ListNode.from_list([9, 9, 1]),
                l2=ListNode.from_list([1]),
                output=ListNode.from_list([0, 0, 2]),
            ),
            TestCase(
                l1=ListNode.from_list([2, 4, 3]),
                l2=ListNode.from_list([5, 6, 4]),
                output=ListNode.from_list([7, 0, 8]),
            ),
            TestCase(
                l1=ListNode.from_list([9, 9, 9, 9, 9, 9]),
                l2=ListNode.from_list([9, 9, 9, 9]),
                output=ListNode.from_list([8, 9, 9, 9, 0, 0, 1]),
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.addTwoNumbers(case.l1, case.l2)
            self.assertEqual(result, case.output)
