// 1065 : 한수

const readFile = process.platform === 'linux' ? '/dev/stdin' : 't.txt';

const target = require('fs').readFileSync(readFile).toString().trim();
let cnt = 0;

for (let n = 1; n <= Number(target); n++) {
  if (n <= 99) {
    cnt++;
  } else {
    if (String(n)[0] - String(n)[1] === String(n)[1] - String(n)[2]) {
      cnt++;
    }
  }
}

console.log(cnt);