class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        lists = list(s)
        lists.sort()

        listt = list(t)
        listt.sort()

        return lists == listt
