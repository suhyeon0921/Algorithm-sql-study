const [m, n] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let prime = [];
for (let i = 0; i <= n; i++) {
  prime.push(true);
}
prime[0] = false;
prime[1] = false;

for (let i = 2; i * i <= n; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= n; j += i) {
      prime[j] = false;
    }
  }
}

let answer = [];
for (let i = m; i <= n; i++) {
  if (prime[i]) {
    answer.push(i);
  }
}
console.log(answer.join('\n'));