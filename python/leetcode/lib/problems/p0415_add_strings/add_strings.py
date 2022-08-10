class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        l1 = list(num1)
        l1.reverse()

        l2 = list(num2)
        l2.reverse()

        maxlen = max(len(l1), len(l2))
        result = []

        extra = 0
        i = 0

        while i < len(l1) and i < len(l2):
            n1 = int(l1[i])
            n2 = int(l2[i])

            total = n1 + n2 + extra
            extra = 0

            if total >= 10:
                total -= 10
                extra = 1

            result.append(str(total))
            i += 1

        for i1 in range(i, len(l1)):
            n = int(l1[i1])
            total = n + extra
            extra = 0

            if total >= 10:
                total -= 10
                extra = 1

            result.append(str(total))

        for i2 in range(i, len(l2)):
            n = int(l2[i2])
            total = n + extra
            extra = 0

            if total >= 10:
                total -= 10
                extra = 1

            result.append(str(total))

        if extra > 0:
            result.append("1")

        result.reverse()

        return "".join(result)
