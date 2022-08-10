from typing import Optional
from lib.helpers.int_list_node import ListNode


class Solution:
    def addTwoNumbers(
        self,
        l1: Optional[ListNode],
        l2: Optional[ListNode],
    ) -> Optional[ListNode]:
        dummy = ListNode(0)
        node = dummy

        extra = 0

        while l1 != None and l2 != None:
            total = l1.val + l2.val + extra
            l1 = l1.next
            l2 = l2.next
            extra = 0

            if total >= 10:
                total = total - 10
                extra = 1

            node.next = ListNode(total)
            node = node.next

        while l1 != None:
            total = l1.val + extra
            l1 = l1.next
            extra = 0

            if total >= 10:
                total = total - 10
                extra = 1

            node.next = ListNode(total)
            node = node.next

        while l2 != None:
            total = l2.val + extra
            l2 = l2.next
            extra = 0

            if total >= 10:
                total = total - 10
                extra = 1

            node.next = ListNode(total)
            node = node.next

        if extra > 0:
            node.next = ListNode(extra)

        return dummy.next
