// 6603 : 로또

const readFile = process.platform === 'linux' ? '/dev/stdin' : 't.txt';

let input = require('fs').readFileSync(readFile).toString().trim().split('\n');

input.pop();
input = input.map((v) => v.split(' ').map(Number));

let answer = '';
let K;
let S;

input.forEach((x) => {
  [K, ...S] = x;
  DFS(0, []);
  answer += '\n';
});

function DFS(L, pick) {
  if (pick.length === 6) {
    answer += `${pick.join(' ')}\n`;
    return;
  }
  for (let i = L; i < K; i++) {
    DFS(i + 1, [...pick, S[i]]);
  }
}

console.log(answer);
