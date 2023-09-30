// title: 영수증
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);
const total = input[0];
const includeOne = input.slice(1).reduce((pre, cur) => pre + cur, 0);

console.log(total - includeOne);
