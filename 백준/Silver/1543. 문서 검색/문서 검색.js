// 1543 : 문서 검색

const readFile = process.platform === 'linux' ? '/dev/stdin' : 't.txt';

let [input, target] = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

let document = input.split('');
let start = 0;
let end = target.length;
let cnt = 0;

while (true) {
  if (document.slice(start, end).join('') === target) {
    document.splice(start, target.length);
    cnt++;
  } else {
    start++;
    end++;
  }
  if (end > document.length) {
    break;
  }
}
console.log(cnt);