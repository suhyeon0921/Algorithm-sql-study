// 2178 : 미로 탐색

const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const [yMax, xMax] = input.shift().split(' ');

const map = input.map((v) => v.split('').map((x) => +x));

const stack = [[0, 0, 1]];

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

while (stack.length) {
  const [x, y, dis] = stack.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];

    if (0 <= nx && ny > -1 && nx < xMax && ny < yMax) {
      if (map[ny][nx] === 1) {
        map[ny][nx] = dis + 1;
        stack.push([nx, ny, dis + 1]);
      }
    }
  }
}

console.log(map[yMax - 1][xMax - 1]);