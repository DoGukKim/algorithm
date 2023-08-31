// title: 점수계산
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input[1].split(" ").map(Number);

let result = 0;
let acc = 1;
for (let i = 0; i < n; i++) {
  if (input[i] === 1) {
    result += acc;
    acc++;
  } else {
    acc = 1;
  }
}

console.log(result);
