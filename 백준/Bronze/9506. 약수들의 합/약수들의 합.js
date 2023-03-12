const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let arrNums = new Array();
let answer = '';

for (let i = 0; i < input.length; i++) {
  if (input[i] == '-1') {
    break;
  }
  for (let j = 1; j <= input[i] / 2; j++) {
    if (Number(input[i]) % j === 0) {
      arrNums.push(j);
    }
  }
  numSum = arrNums.reduce((a, b) => a + b);
  if (numSum == input[i]) {
    answer += input[i] + ' = ' + arrNums.join(' + ');
  } else {
    answer += input[i] + ' is NOT perfect.';
  }
  arrNums = [];
  console.log(answer);
  answer = '';
}