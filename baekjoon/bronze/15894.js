// title: 수학과목은 체육과목입니다
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

console.log(Number(input) * 4);
