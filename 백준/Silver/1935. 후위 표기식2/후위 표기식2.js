// 1935 : 후위 표기식2

const readFile = '/dev/stdin'
// const readFile = 'test.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const [n, mark, ...nums] = input;
const numbers = nums.map((i) => Number(i));

let ASCII = 65;
const stack = [];
const operators = ['-', '/', '+', '*'];
const transformer = {};

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

// a, b, c, d ... 에 해당하는 값 넣기
for (let i = 0; i < n; i++) {
  const alphabet = String.fromCharCode(ASCII++);
  transformer[alphabet] = numbers[i];
}

// a, b, c, d ... 에 해당하는 값 대입
const transformExpression = mark
  .split('')
  // 연산자이면 원래 값 그대로, 아니라면 해당 값으로 대체
  .map((value) => (!operators.includes(value) ? transformer[value] : value));

for (let i = 0; i < transformExpression.length; i++) {
  let pushValue = transformExpression[i];
  // 연산자일 경우
  if (operators.includes(pushValue)) {
    const secondValue = stack.pop();
    const firstValue = stack.pop();
    // 해당 연산 저장
    const calculateFunction = calculator[pushValue];
    // 연산 수행
    pushValue = calculateFunction(firstValue, secondValue);
  }
  stack.push(pushValue);
}

console.log((Math.floor(stack[0] * 100) / 100).toFixed(2));
