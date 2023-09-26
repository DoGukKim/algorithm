// title: 팰린드롬
// time: O(n/2)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

for (let i = 0; i < Math.floor(input.length / 2); i++) {
  if (input[i] !== input[input.length - 1 - i]) {
    return console.log("0");
  }
}

console.log("1");
