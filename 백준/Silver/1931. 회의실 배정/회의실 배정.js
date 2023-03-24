const [n, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const times = arr
  .map((num) => num.split(' ').map((num) => +num))
  .sort((a, b) => {
    // 끝나는 시간이 같을 경우 시작 시간으로 오름차순 정렬
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      // 끝나는 시간 기준 오름차순 정렬
      return a[1] - b[1];
    }
  });

let endTime = 0;    // 최근 회의 끝난 시각
let answer = 0;
times.forEach((time) => {
  if (time[0] >= endTime) {
    answer += 1;
    endTime = time[1];
  }
});

console.log(answer);
