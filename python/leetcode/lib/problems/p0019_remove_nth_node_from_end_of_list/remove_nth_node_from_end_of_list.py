from typing import List, Optional

from lib.helpers.int_list_node import ListNode


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if head == None:
            return None

        stack = []
        node = head
        while node:
            stack.append(node)
            node = node.next

        node = None
        while n > 0:
            node = stack.pop()
            n -= 1

        if len(stack) == 0:
            return node.next

        topStack = stack[len(stack) - 1]
        topStack.next = node.next

        return head
