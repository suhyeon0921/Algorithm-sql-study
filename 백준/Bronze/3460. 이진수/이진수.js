const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const iter = input[0];

for (let i = 1; i <= iter; i++) {
  const binary = input[i].toString(2);
  const binaryArr = [...binary].reverse();

  let ans = [];

  for (let j = 0; j < binaryArr.length; j++) {
    if (binaryArr[j] === "1") {
      ans.push(j);
    }
  }

  console.log(ans.join(" "));
}