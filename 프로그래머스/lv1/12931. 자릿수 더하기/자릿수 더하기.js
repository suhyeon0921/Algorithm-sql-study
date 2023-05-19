function solution(n)
{   
    const nums = String(n);
    var answer = 0
    for (let i = 0; i < nums.length; i++) {
        answer += Number(nums[i]);
    }
    return answer;
}