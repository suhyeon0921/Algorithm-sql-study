/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
   if (nums.length === 1) return 0;

    let prevMax = 0, max = 0, jumps = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);

        if (i === prevMax) {
            jumps++;
            prevMax = max;
            
            if (max >= nums.length - 1) {
                return jumps;
            }
        }
    }

    return jumps;
};