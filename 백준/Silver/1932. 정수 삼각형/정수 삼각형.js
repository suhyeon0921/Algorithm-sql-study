const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

let [n, ...arr] = require('fs').readFileSync(readFile).toString().trim().split('\n');

const N = +n;
let dp = arr.map(v => v.split(' ').map(v => +v))

for (let i = 1; i < N; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    if (j == 0) dp[i][j] += dp[i - 1][j]
    else if (j == dp[i].length - 1) dp[i][j] += dp[i - 1][j - 1];
    else dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j])
  }
}

const answer = Math.max(...dp[N - 1]);
console.log(answer)