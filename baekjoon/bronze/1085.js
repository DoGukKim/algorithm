// title: 직사각형 탈출
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const [x, y, w, h] = input.split(" ").map(Number);

console.log(Math.min(x, y, Math.abs(x - w), Math.abs(y - h)));
