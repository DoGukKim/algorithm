// title: 10부제
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const k = Number(input[0]);
input = input[1].split(" ").map(Number);

let result = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] % 10 === k) result++;
}
console.log(result);
