function solution(s) {
    const nums = s.split(' ');
    var answer = [];
    answer.push(Math.min(...nums))
    answer.push(Math.max(...nums))
    return answer.join(' ')
}