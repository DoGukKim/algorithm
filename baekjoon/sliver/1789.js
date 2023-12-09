// title: 수들의 합
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

input = Number(input);

let sum = 1;
let num = 2;
let result = 1;

while (sum + num <= input) {
  sum += num++;
  result++;
}

console.log(result);
