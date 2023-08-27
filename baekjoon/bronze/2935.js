// title: 소음
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

input[0] = BigInt(input[0]);
input[2] = BigInt(input[2]);
const map = {
  "+": (a, b) => a + b,
  "*": (a, b) => a * b,
};

console.log(map[input[1]](input[0], input[2]).toString());
