from typing import List
from unittest import TestCase
from dataclasses import dataclass

from lib.helpers.int_list_node import ListNode
from lib.problems.p0141_linked_list_cycle.linked_list_cycle import Solution


class Test_linked_list_cycle(TestCase):
    def test_linked_list_cycle(self):
        s = Solution()

        l1 = ListNode.from_list([3, 2, 0, -4])
        l1.next.next.next.next = l1.next
        output = True
        self.assertEqual(s.hasCycle(l1), output)

        l2 = ListNode.from_list([1, 2])
        l2.next.next = l2
        output = True
        self.assertEqual(s.hasCycle(l2), output)

        l3 = ListNode.from_list([1])
        output = False
        self.assertEqual(s.hasCycle(l3), output)

        l4 = ListNode.from_list([1, 2, 3])
        l4.next = l4
        output = True
        self.assertEqual(s.hasCycle(l4), output)

        l5 = ListNode.from_list([1, 2])
        output = False
        self.assertEqual(s.hasCycle(l5), output)

        l6 = ListNode.from_list([1, 2, 3])
        output = False
        self.assertEqual(s.hasCycle(l6), output)
