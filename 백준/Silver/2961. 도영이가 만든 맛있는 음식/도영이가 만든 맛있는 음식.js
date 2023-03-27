const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const n = Number(input.shift());
const flavor = [];

for (let i = 0; i < n; i++) {
  flavor.push(input[i].split(' ').map(Number));
}

// 재료의 조합 (1개, 2개, 3개 ...)
let combi = [];
// 신맛과 쓴맛의 차이
let diff = Math.abs(flavor[0][0] - flavor[0][1]);
let visited = Array(n).fill(false);

// 재료의 조합을 만드는 함수
// cnt는 섞을 재료의 개수를 정하는 인자
const makeCombi = (start, num, cnt) => {
  if (num === cnt) {
    let sour = 1;
    let bitter = 0;
    combi.map((el) => {
      sour *= flavor[el][0];
      bitter += flavor[el][1];
    });
    if (diff > Math.abs(sour - bitter)) diff = Math.abs(sour - bitter);
    return;
  }
  for (let i = start; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      combi.push(i);
      makeCombi(i, num + 1, cnt);

      visited[i] = false;
      combi.pop();
    }
  }
};

// 재료의 개수만큼 조합을 찾아서 차이를 계산한다.
for (let i = 1; i <= n; i++) {
  makeCombi(0, 0, i);
}
console.log(diff);