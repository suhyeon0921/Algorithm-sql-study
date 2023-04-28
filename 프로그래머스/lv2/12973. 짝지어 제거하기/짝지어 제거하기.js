function solution(s)
{
    const stack = [];
    
    for (let i of s) {
        stack.push(i);
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
        }
    }
    var answer = stack.length === 0 ? 1 : 0;
    return answer;
}