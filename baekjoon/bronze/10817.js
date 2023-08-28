// title: 세 수
// time: O(n log n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
console.log(input.split(" ").sort((a, b) => a - b)[1]);
