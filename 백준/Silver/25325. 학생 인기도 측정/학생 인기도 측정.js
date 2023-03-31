const readFile = 'dev/stdin'

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const n = input.shift();
const student = input.shift().split(' ');

let obj = {};
// 학생이름 : 초기값(0) 설정
for (e of student) {
  obj[e] = 0;
}

// 인기 측정
for (e of input) {
  e.split(' ').map((e) => obj[e]++);
}

// 배열에 키, 값 넣기
let temp = [];
for (e of Object.keys(obj)) {
  temp.push([e, obj[e]]);
}

// 점수 기준 내림차순 정렬, 이름 같을 시 오름차순 정렬
temp.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return b[1] - a[1];
  }
});

answer = [];
for (e of temp) {
  answer.push(e.join(' '));
}
console.log(answer.join('\n'));
