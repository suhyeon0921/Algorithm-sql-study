// 친구

const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const INF = 1e9;
const n = Number(input[0]);

const graph = [new Array(n + 1).fill(INF)];
for (let i = 1; i <= n; i++) {
  graph.push(new Array(n + 1).fill(INF));
  let line = input[i].split('');
  for (let j = 0; j < n; j++) {
    if (line[j] === 'Y') graph[i][j + 1] = 1;
  }
}

for (let i = 1; i <= n; i++) graph[i][i] = 0;

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

let twoFriends = new Array(n + 1).fill(0);
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    if (a != b && graph[a][b] <= 2) twoFriends[a] += 1;
  }
}

console.log(twoFriends.reduce((a, b) => Math.max(a, b)));
