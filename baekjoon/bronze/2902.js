// title: KMP는 왜 KMP일까?
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let result = "";
for (let i = 0; i < input.length; i++) {
  if (input[i].toUpperCase() === input[i] && input[i] !== "-")
    result += `${input[i]}`;
}
console.log(result);
