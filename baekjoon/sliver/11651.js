// Title: 좌표 정렬하기2
// Time: O(n log n)
// Space: O(n)
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
input = input.map((i) => i.split(" ").map(Number));
input.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else return a[1] - b[1];
});

let result = "";
for (let i = 0; i < input.length; i++) {
  result += `${input[i].join(" ")}\n`;
}
console.log(result);
