// Title: 좌표 정렬하기
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
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else return a[0] - b[0];
});

let result = "";
for (let i = 0; i < input.length; i++) {
  result += `${input[i].join(" ")}\n`;
}
console.log(result);
