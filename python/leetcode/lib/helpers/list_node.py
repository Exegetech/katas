from typing import List, TypeVar, Generic


T = TypeVar("T")


class ListNode(Generic[T]):
    def __init__(self, val: T, next=None):
        self.val = val
        self.next = next

    def to_list(self) -> List[T]:
        head = self
        result = []
        while head != None:
            result.append(head.val)
            head = head.next

        return result

    @staticmethod
    def from_list(vals: List[T]) -> "ListNode[T]":
        dummy = ListNode(0)
        node = dummy

        for i in range(len(vals)):
            node.next = ListNode(vals[i])
            node = node.next

        return dummy.next

    def __eq__(self, other: "ListNode[T]"):
        while self and other and self.val == other.val:
            self = self.next
            other = other.next

        if not self and not other:
            return True

        return False
