// Title: 연결 요소의 개수
// Time: O(v*e)
// Space: O(v+e)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
const ch = Array.from({ length: n + 1 }, () => 0);
for (let i = 0; i < m; i++) {
  const [v, e] = input[i];
  graph[v][e] = 1;
  graph[e][v] = 1;
}

let result = 0;
for (let i = 1; i <= n; i++) {
  if (ch[i] === 0) {
    dfs(i);
    result++;
  }
}

console.log(result);

function dfs(v) {
  ch[v] = 1;
  for (let i = 1; i <= n; i++) {
    if (ch[i] === 0 && graph[v][i] === 1) {
      dfs(i);
    }
  }
}
