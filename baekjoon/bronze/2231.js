// title: 분해합
// time: O(tm)
// space: O(t)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);

const t = input[0];
let result = "";

for (let i = 1; i <= t; i++) {
  const curStr = String(input[i]);
  const str = String(Math.pow(input[i], 2));
  const copyWord = str.slice(str.length - curStr.length);
  if (copyWord === curStr) result += `YES\n`;
  else result += `NO\n`;
}

console.log(result);
