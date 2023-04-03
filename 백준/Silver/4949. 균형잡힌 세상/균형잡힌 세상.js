const readFile = process.platform === 'linux' ? '/dev/stdin' : 't.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const open = ['(', '['];
const close = [')', ']'];

let stack;
const answer = [];

input.slice(0, input.length - 1).forEach((v) => {
  let check = false;
  stack = [];
  for (let i = 0; i < v.length; i++) {
    if (open.includes(v[i])) {
      stack.push(v[i]);
    } else if (close.includes(v[i])) {
      if (stack.pop() !== open[close.indexOf(v[i])]) {
        answer.push('no');
        check = true;
        break;
      }
    }
  }
  if (!check) {
    if (stack.length === 0) {
      answer.push('yes');
    } else {
      answer.push('no');
    }
  }
});

console.log(answer.join('\n'));