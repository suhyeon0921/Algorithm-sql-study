// 2980 : 도로와 신호등

const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const [N, L] = input[0].split(' ').map(Number);
let info = [];
for (let i = 1; i <= N; i++) {
  info.push(input[i].split(' ').map(Number));
}

let time = 0;
let plusTime = 0;

info.map((item) => {
  time = item[0] + plusTime;
  let tmp = time % (item[1] + item[2]);

  if (tmp < item[1]) {
    plusTime += item[1] - tmp;
  }
});

console.log(plusTime + L);
