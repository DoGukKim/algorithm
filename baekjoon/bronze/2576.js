// title: 홀수
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);

let sum = 0;
let min = Infinity;

for (let i = 0; i < 7; i++) {
  if (input[i] % 2 !== 0) {
    sum += input[i];
    min = Math.min(min, input[i]);
  }
}

console.log(sum === 0 ? -1 : `${sum}\n${min}`);
