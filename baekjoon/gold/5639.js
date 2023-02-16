// Title: 이진 검색 트리
// Time: O(n log n)
// Space: O(n log n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);

let result = "";
dfs(0, input.length);
console.log(result);

function dfs(s, e) {
  if (s >= e) return;

  let newEnd = e;
  for (let i = s + 1; i < e; i++) {
    if (input[s] < input[i]) {
      newEnd = i;
      break;
    }
  }

  dfs(s + 1, newEnd);
  dfs(newEnd, e);
  result += `${input[s]}\n`;
}
