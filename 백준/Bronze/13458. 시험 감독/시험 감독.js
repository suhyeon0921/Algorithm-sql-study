const readFile = '/dev/stdin';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const [n, people, supervisor] = input;
const [b, c] = supervisor.split(' ').map((i) => Number(i));
const a = people.split(' ');

let result = 0;
for (let i = 0; i < n; i++) {
  // 필요한 부감독관
  const admin = Math.floor((a[i] - b) / c);
  // 총 감독관이 1명만 필요한 경우
  if (a[i] <= b) {
    result += 1;
  } else {
    // 나머지가 있는 경우와 없는 경우 나누기
    result += (a[i] - b) % c === 0 ? admin + 1 : admin + 2;
  }
}
console.log(result);
