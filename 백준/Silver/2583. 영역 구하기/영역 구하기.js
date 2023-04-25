// 2584 : 영역 구하기

const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const [m, n, k] = input.shift().split(' ').map(Number);

let arr = Array.from({ length: m }).map(
  (row) => (row = Array.from({ length: n }).fill(0))
);

let coords = [];
input.forEach((item) => {
  item = item.split(' ').map(Number);
  let start = [item[1], item[0]];
  let end = [item[3] - 1, item[2] - 1];

  for (let i = start[0]; i <= end[0]; i++) {
    for (let j = start[1]; j <= end[1]; j++) {
      arr[i][j] = 1;
    }
  }
});

const visitedCoords = {};

const bfs = (x, y) => {
  const result = [];
  const queue = [[x, y]];
  const visited = {};
  visited[[x, y]] = true;
  visitedCoords[[x, y]] = true;
  let dx = [0, 0, 1, -1];
  let dy = [-1, 1, 0, 0];
  let cnt = 1;

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let coord = queue.shift();
      result.push(coord);
      for (let j = 0; j < 4; j++) {
        let nx = coord[0] + dx[j];
        let ny = coord[1] + dy[j];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < arr.length &&
          ny < arr[0].length &&
          // 좌표의 유효성 확인
          arr[nx][ny] === 0 &&
          // 0일 경우에만 탐색 진행
          !visited[[nx, ny]]
          // visited 확인
        ) {
          visited[[nx, ny]] = true;
          visitedCoords[[nx, ny]] = true;

          cnt++;
          queue.push([nx, ny]);
        }
      }
    }
  }
  return result;
};

let tmp = [];
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 0 && !visitedCoords[[i, j]]) tmp.push(bfs(i, j).length);
  }
}
tmp.sort((a, b) => a - b);
let answer = tmp.length + '\n' + tmp.join(' ');
console.log(answer);
