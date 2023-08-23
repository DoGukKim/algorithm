// title: R2
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const [R1, S] = input.split(" ").map(Number);

console.log(S * 2 - R1 * 2 + R1);
