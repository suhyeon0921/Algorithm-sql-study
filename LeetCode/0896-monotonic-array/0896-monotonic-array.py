class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        rev = sorted(nums, reverse = True)
        so = sorted(nums)

        return nums == so or nums == rev