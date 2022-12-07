// Title: 단어 정렬
// Time: O(n log n)
// Space: O(n)
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
input.sort();
input.sort((a, b) => {
  if (a.length === b.length) {
    return 0;
  } else return a.length - b.length;
});
input = new Set(input);

let result = "";
for (const i of input) {
  result += `${i}\n`;
}
console.log(result);
