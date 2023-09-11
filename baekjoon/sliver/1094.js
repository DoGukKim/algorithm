// title: 막대기
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

input = Number(input);

let current = 64;
let result = 0;
let sum = 0;

while (current >= 1) {
  if (sum + current <= input) {
    sum += current;
    result++;
  }

  current = Math.floor(current / 2);
}

console.log(result);
