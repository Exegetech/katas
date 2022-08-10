from typing import List, Optional

from lib.helpers.int_list_node import ListNode


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None or head.next == None:
            return head

        dummy = ListNode(0)
        dummy.next = head

        prev = dummy
        curr = head

        while prev and curr:
            nextPrev = curr
            nextCurr = curr.next

            curr.next = prev

            prev = nextPrev
            curr = nextCurr

        dummy.next.next = None

        return prev
