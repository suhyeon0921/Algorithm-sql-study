// 2606 : 바이러스

const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const node = Number(input[0]);
const edge = Number(input[1]);
const graph = [...Array(node + 1)].map(() => []);
const visited = [...Array(node + 1)].fill(false);
let answer = 0;

// 그래프 생성
for (let i = 0; i < edge; i++) {
  let start = Number(input[i + 2].split(' ')[0]);
  let end = Number(input[i + 2].split(' ')[1]);
  graph[start].push(end);
  graph[end].push(start);
}

// 1번 노드 방문 처리 후 시작
visited[1] = true;
const dfs = (start) => {
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = true;
      answer++;
      dfs(end);
    }
  }
};
dfs(1);
console.log(answer);
