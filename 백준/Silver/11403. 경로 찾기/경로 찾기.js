// 경로 찾기

const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

let N = +input.shift();
let path = [];

for (const row of input) {
  path.push(row.split(' ').map(Number));
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (path[i][k] && path[k][j]) {
        path[i][j] = 1;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(path[i].join(' '));
}
