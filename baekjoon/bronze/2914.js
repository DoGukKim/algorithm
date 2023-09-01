// title: 저쟉권
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = input.split(" ").map(Number);
const [a, i] = input;

console.log(a * (i - 1) + 1);
