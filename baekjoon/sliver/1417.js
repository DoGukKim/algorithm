// title: 국회의원 선거
// time: O(n+m)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number);
let me = input[1];
const arr = input.slice(2);

if (arr.length === 0) {
  console.log(0);
  return null;
}

let result = 0;
let max = Math.max(...arr);
while (me <= max) {
  arr[arr.indexOf(max)] -= 1;
  me++;
  result++;
  max = Math.max(...arr);
}
console.log(result);
