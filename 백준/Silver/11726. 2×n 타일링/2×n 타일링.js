const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

const input = require('fs').readFileSync(readFile).toString().trim();

const dp = [0, 1, 2];
for (let i = 3; i <= input; i++) {
  dp.push((dp[i - 1] + dp[i - 2]) % 10007);
}

console.log(dp[input]);
