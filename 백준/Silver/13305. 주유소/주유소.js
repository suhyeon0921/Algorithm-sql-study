// 13305 : 주유소

const readFile = process.platform === 'linux' ? '/dev/stdin' : 't.txt';

let [n, d, price] = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

n = Number(n);

// n의 최댓값이 10^5, 거리와 가격은 10^9로 매우 크므로, BigInt를 사용
d = d.split(' ').map((i) => BigInt(i));
price = price.split(' ').map((i) => BigInt(i));

let curPrice = price[0];
let cost = 0n;

for (let i = 0; i < n - 1; i++) {
  cost += curPrice * d[i];
  if (curPrice > price[i + 1]) {
    curPrice = price[i + 1];
  }
}

console.log(String(cost));