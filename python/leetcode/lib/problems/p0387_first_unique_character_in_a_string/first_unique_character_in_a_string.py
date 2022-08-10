class Solution:
    def firstUniqChar(self, s: str) -> int:
        dictionary = {}

        for i in range(len(s)):
            ch = s[i]
            if dictionary.get(ch) == None:
                dictionary[ch] = [0, i]

            lst = dictionary.get(ch)
            lst[0] += 1

        for ch in dictionary:
            lst = dictionary[ch]
            if lst[0] == 1:
                return lst[1]

        return -1
