// title: 상근날드
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

input = input.split("\n").map(Number);

const burger = Math.min(input[0], input[1], input[2]);
const drink = Math.min(input[3], input[4]);

console.log(burger + drink - 50);
