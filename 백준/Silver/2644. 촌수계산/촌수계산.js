const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const n = Number(input.shift());
const [x, y] = input
  .shift()
  .split(' ')
  .map((v) => +v);
const m = input.shift();

const graph = [...Array(n + 1)].map(() => []);
const visited = [...Array(n + 1)].fill(false);

// 그래프 생성
for (let i = 0; i < m; i++) {
  let start = Number(input[i].split(' ')[0]);
  let end = Number(input[i].split(' ')[1]);
  graph[start].push(end);
  graph[end].push(start);
}

// 사람 수가 1이면 촌수 계산이 불가능해서 -1 출력
if (n === 1) {
  return console.log(-1);
}

const bfs = (graph, startNode, tartgetNode) => {
  const visited = [];
  let needVisit = [[startNode, 0]];

  while (needVisit.length !== 0) {
    const [node, cnt] = needVisit.shift();
    if (node === tartgetNode) {
      return cnt;
    }

    if (!visited.includes(node)) {
      visited.push(node);
      let nodes = graph[node].map((e) => [e, cnt + 1]);
      needVisit = [...needVisit, ...nodes];
    }
  }
  return -1;
};

console.log(bfs(graph, x, y));