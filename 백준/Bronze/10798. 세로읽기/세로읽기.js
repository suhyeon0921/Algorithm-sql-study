const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const maxLength = Math.max(...input.map((i) => i.length));
let answer = '';

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    answer += input[j][i] || '';
  }
}
console.log(answer);
