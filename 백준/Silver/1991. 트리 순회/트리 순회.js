// 1991 : 트리 순회

const readFile = process.platform === 'linux' ? '/dev/stdin' : 't.txt';

const [n, ...input] = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const nodes = input.map((v) => v.split(' '));
const trees = nodes.reduce((acc, [node, left, right]) => {
  acc[node] = { left, right };
  return acc;
}, {});

const traversePreOrder = (node) => {
  if (node === '.') {
    return '';
  }
  const { left, right } = trees[node];
  return node + traversePreOrder(left) + traversePreOrder(right);
};

const traverseInOrder = (node) => {
  if (node === '.') {
    return '';
  }
  const { left, right } = trees[node];
  return traverseInOrder(left) + node + traverseInOrder(right);
};

const traversePostOrder = (node) => {
  if (node === '.') {
    return '';
  }
  const { left, right } = trees[node];
  return traversePostOrder(left) + traversePostOrder(right) + node;
};

console.log(traversePreOrder('A'));
console.log(traverseInOrder('A'));
console.log(traversePostOrder('A'));
