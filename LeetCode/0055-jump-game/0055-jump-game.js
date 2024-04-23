/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums[0] === 0) {
    return false;
  }
  if (nums.length === 1) {
    let maxJump = 0;
    if (maxJump >= nums.length - 1) {
      return true;
    }
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let maxJump = 0;
    maxJump += i + nums[i] // 최대 점프 길이
    if (maxJump >= nums.length - 1) {
      return true;
    }
  }
  return false;
};