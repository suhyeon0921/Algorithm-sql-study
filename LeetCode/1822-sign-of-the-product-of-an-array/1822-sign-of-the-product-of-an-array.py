class Solution:
    def arraySign(self, nums: List[int]) -> int:
        count = 0
        for num in nums:
            if num == 0:
                return 0
            elif num < 1:
                count += 1
        if count & 1:
            return -1
        return 1