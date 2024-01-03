class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        result_num = int(''.join(map(str, digits))) + 1
        return [int(digit) for digit in str(result_num)]
