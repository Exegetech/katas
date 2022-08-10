from typing import List, TypeVar, Generic, Union


T = TypeVar("T")


class TreeNode(Generic[T]):
    def __init__(self, val: T, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def to_list(self) -> List[T]:
        result = []
        queue = [self]

        while len(queue) > 0:
            size = len(queue)
            for i in range(size):
                node = queue[i]

                if node == None:
                    result.append(None)
                else:
                    result.append(node.val)
                    queue.append(queue, node.left, node.right)

            queue = queue[size:]

        i = len(result)
        while i > 0 and result[i - 1] == None:
            i -= 1

        return result[:i]

    @staticmethod
    def from_list(vals: List[Union[T, None]]) -> "TreeNode[T]":
        if len(vals) == 0:
            return None

        root = TreeNode(vals[0])
        queue = [root]

        i = 1
        while i < len(vals):
            node = queue[0]
            queue.pop(0)

            if i < n and vals[i] != None:
                node.left = TreeNode(vals[i])
                queue.append(node.left)

            i += 1

            if i < n and vals[i] != None:
                node.right = TreeNode(vals[i])
                queue.append(node.right)

            i += 1

        return root

    # def __eq__(self, other: "TreeNode[T]"):
    #     while self and other and self.val == other.val:
    #         self = self.left
    #         other = other.left

    #     if not self and not other:
    #         return True

    #     return False
