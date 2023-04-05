const readFile = process.platform === 'linux' ? '/dev/stdin' : 't.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

let [n, ...nums] = input;
nums = nums.map((n) => Number(n));

const stack = [];
let answer = '';
let cnt = 1;

for (let i = 0; i < n; i++) {
  const num = nums.shift();

  while (cnt <= num) {
    stack.push(cnt++);
    answer += '+';
  }

  const popNum = stack.pop();
  if (popNum !== num) {
    return console.log('NO');
  }
  answer += '-';
}
console.log(answer.split('').join('\n'));
