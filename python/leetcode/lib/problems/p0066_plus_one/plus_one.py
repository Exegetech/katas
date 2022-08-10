from typing import List


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        result = []
        extra = 0

        for i in range(len(digits) - 1, -1, -1):
            if i == len(digits) - 1:
                n = digits[i] + 1

                if n >= 10:
                    n -= 10
                    extra = 1

                result.append(n)
            else:
                n = digits[i] + extra
                extra = 0

                if n >= 10:
                    n -= 10
                    extra = 1

                result.append(n)

        if extra > 0:
            result.append(1)

        result.reverse()

        return result
