from typing import List
from unittest import TestCase
from dataclasses import dataclass

from lib.helpers.int_list_node import ListNode
from lib.problems.p0237_delete_node_in_a_linked_list.delete_node_in_a_linked_list import (
    Solution,
)


class Test_delete_node_in_a_linked_list(TestCase):
    def test_delete_node_in_a_linked_list(self):
        s = Solution()

        lin1 = ListNode.from_list([4, 5, 1, 9])
        n1 = lin1.next
        lout1 = ListNode.from_list([4, 1, 9])

        s.deleteNode(n1)
        self.assertEqual(lin1, lout1)

        lin2 = ListNode.from_list([4, 5, 1, 9])
        n2 = lin2.next.next
        lout2 = ListNode.from_list([4, 5, 9])

        s.deleteNode(n2)
        self.assertEqual(lin2, lout2)
