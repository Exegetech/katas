from typing import List, Optional

from lib.helpers.int_list_node import ListNode


class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None:
            return None

        dummy = ListNode(0)
        dummy.next = head

        prev = dummy
        node = dummy.next

        while node:
            has_duplicate = False
            while node.next and node.val == node.next.val:
                node = node.next
                has_duplicate = True

            if has_duplicate:
                node = node.next
                prev.next = node
            else:
                prev = node
                node = node.next

        return dummy.next
