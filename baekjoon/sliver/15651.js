// Title: N과 M (3)
// Time: O(n^m)
// Space: O(n!)
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [n, m] = input.split(" ").map((i) => Number(i));

let result = "";
function dfs(permute) {
  if (permute.length === m) {
    result += `${permute.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= n; i++) {
    permute.push(i);
    dfs(permute);
    permute.pop();
  }
}

dfs([]);

console.log(result.trim());
