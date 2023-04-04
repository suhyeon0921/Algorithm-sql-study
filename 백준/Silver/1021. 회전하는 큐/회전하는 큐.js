const readFile = process.platform === 'linux' ? '/dev/stdin' : 't.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const arr = input[0];
const [n, m] = arr.split(' ');

const nums = input[1].split(' ');

let queue = [];

// 1 ~ n 까지 배열 생성
for (let i = 0; i < Number(n); i++) {
  queue.push(i + 1);
}

// 1번 : 맨 앞 원소 추출
const method1 = () => {
  queue.shift();
};

// 2번 : 맨 앞 원소 맨 뒤로 보내기
const method2 = () => {
  let num = queue.shift();
  queue.push(num);
};

// 3번 : 맨 뒤 원소 맨 앞으로 보내기
const method3 = () => {
  let num = queue.pop();
  queue.unshift(num);
};

let cnt = 0;

for (num of nums) {
  let target = Number(num);
  if (target === queue[0]) {
    method1();
  } else {
    let idx = queue.indexOf(target);
    let stable = queue.length / 2;

    if (idx <= stable) {
      for (let i = 0; i < idx; i++) {
        method2();
        cnt++;
      }
    } else {
      for (let i = 0; i < queue.length - idx; i++) {
        method3();
        cnt++;
      }
    }
    method1();
  }
}

console.log(cnt);
