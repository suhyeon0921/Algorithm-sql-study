// 24480 : 깊이 우선 탐색 2

const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const [n, m, r] = input.shift().split(' ').map(Number);
var graph = Array.from(Array(n + 1), () => []);
for (let edge of input) {
  const [x, y] = edge.split(' ');
  graph[x].push(y);
  graph[y].push(x);
}

graph.forEach((e) => e.sort((a, b) => b - a));
const visited = new Array(n + 1).fill(false);
let cnt = 1;
const answer = new Array(n).fill(0);

const dfs = (cur) => {
  visited[cur] = true;
  answer[cur - 1] = cnt++;

  for (let next of graph[cur]) {
    if (visited[next]) {
      continue;
    }
    dfs(+next);
  }
};

dfs(r);

console.log(answer.join('\n'));