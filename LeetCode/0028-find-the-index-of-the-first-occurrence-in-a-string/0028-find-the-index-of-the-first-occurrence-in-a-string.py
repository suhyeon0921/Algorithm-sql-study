class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        find_idx = haystack.find(needle)
        return find_idx