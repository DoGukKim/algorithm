// title: 팩토리얼 0의 개수
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);

let result = 0;
let factor = BigInt(1);

for (let i = input; i > 0; i--) {
  factor *= BigInt(i);
}

const factorStr = factor.toString();
for (let i = factorStr.length - 1; i >= 0; i--) {
  if (factorStr[i] !== "0") break;
  result++;
}

console.log(result);
