// 13565 : 침투

const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const [m, n] = input.shift().split(' ').map(Number);
const grid = input.map((row) => {
  return row.split('').map(Number);
});

let result = 'NO';
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const isValidIndex = (row, col) => {
  if (row < 0 || col < 0 || row >= m || col >= n) {
    return false;
  }
  if (grid[row][col] === 1) {
    return false;
  }

  return true;
};

const dfs = (row, col) => {
  for (const [dirX, dirY] of dir) {
    const [new_row, new_col] = [row + dirX, col + dirY];

    if (isValidIndex(new_row, new_col)) {
      grid[new_row][new_col] = 1;

      if (new_row === m - 1) {
        return true;
      }
      if (dfs(new_row, new_col)) {
        return true;
      }
    }
  }
};

for (let j = 0; j < n; j++) {
  if (grid[0][j] === 0) {
    grid[0][j] = 1;

    if (dfs(0, j)) {
      result = 'YES';
      break;
    }
  }
}
console.log(result);
