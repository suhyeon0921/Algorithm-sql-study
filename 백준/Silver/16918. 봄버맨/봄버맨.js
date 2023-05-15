// 봄버맨

const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const [R, C, N] = input.shift().split(' ').map(Number);
const case1 = input.map((v) => v.split(''));
const case2 = Array.from({ length: R }, () => Array(C).fill('O'));

function soloution(R, C, N, case1) {
  const mapJoin = (arr) => arr.map((v) => v.join('')).join('\n');

  if (N === 1) return mapJoin(case1);
  if (N % 2 === 0) return mapJoin(case2);

  const bomb = (prev) => {
    const grid = Array.from({ length: R }, () => Array(C).fill('O'));

    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (prev[i][j] === 'O') {
          grid[i][j] = '.';
          if (i > 0) grid[i - 1][j] = '.';
          if (j + 1 < C) grid[i][j + 1] = '.';
          if (i + 1 < R) grid[i + 1][j] = '.';
          if (j > 0) grid[i][j - 1] = '.';
        }
      }
    }

    return grid;
  };

  if (N % 4 === 3) return mapJoin(bomb(case1));
  if (N % 4 === 1) return mapJoin(bomb(bomb(case1)));
}

console.log(soloution(R, C, N, case1));
