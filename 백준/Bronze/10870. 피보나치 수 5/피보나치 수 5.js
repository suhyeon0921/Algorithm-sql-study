const n = require('fs').readFileSync('/dev/stdin').toString().trim();

let answer = [];
answer[0] = 0;
answer[1] = 1;
for (let i = 2; i <= n; i++) {
  answer[i] = answer[i - 1] + answer[i - 2];
}
console.log(answer[n]);
