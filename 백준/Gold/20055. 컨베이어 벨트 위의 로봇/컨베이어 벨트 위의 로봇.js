const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const NK = input.shift().split(' ');
const N = NK.shift();
let K = NK.shift();
let answer = 1;
const durability = input.shift().split(' ');
let belt = new Array(2 * N + 1);

for (let i = 1; i <= 2 * N; i++) {
  belt[i] = {
    robot: false,
    durability: durability[i - 1],
  };
}

while (1) {
  // step 1.
  let temp;
  for (let i = 2 * N; i >= 1; i--) {
    if (i === 2 * N) {
      temp = belt[2 * N];
      belt[i] = belt[i - 1];
    } else if (i === 1) belt[i] = temp;
    else belt[i] = belt[i - 1];
  }
  // step 2.
  if (belt[N].robot === true) belt[N].robot = false;
  for (let i = N; i >= 1; i--) {
    if (i !== 1) {
      if (belt[i].robot === false && belt[i].durability >= 1) {
        if (belt[i - 1].robot === true) {
          belt[i - 1].robot = false;
          belt[i].robot = true;
          belt[i].durability--;
          if (belt[i].durability === 0) K--;
          if (K === 0) {
            console.log(answer);
            return answer;
          }
        }
      }
    }
  }
  if (belt[N].robot === true) belt[N].robot = false;
  // step 3.
  if (belt[1].durability > 0) {
    belt[1].robot = true;
    belt[1].durability--;
    if (belt[1].durability === 0) K--;
    if (K === 0) {
      console.log(answer);
      return answer;
    }
  }

  answer++;
}
