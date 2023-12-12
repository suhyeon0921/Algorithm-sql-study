/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var answer = 0;
  var check = false;
    for (num of nums) {
        if (target === num) {
          answer = nums.indexOf(num);
          check = true;
        }
    }
  if (!check) {
    answer = -1
  }
  return answer;
};