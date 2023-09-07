// title: 그릇
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let result = 10;

for (let i = 1; i < input.length; i++) {
  if (input[i] !== input[i - 1]) result += 10;
  else result += 5;
}
console.log(result);
