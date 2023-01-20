// Title: 크냐?
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

let result = "";
for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i];
  result += `${a > b ? "Yes" : "No"}\n`;
}
console.log(result);
