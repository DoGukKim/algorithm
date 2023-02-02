// Title: 연결 요소의 개수
// Time: O(n+m)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));
const ch = Array.from({ length: n + 1 }, () => 0);
const graph = {};
for (let i = 0; i < m; i++) {
  const [v, e] = input[i];
  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];
  graph[v].push(e);
  graph[e].push(v);
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

  for (let i = 0; graph[v] && i < graph[v].length; i++) {
    if (ch[graph[v][i]] === 0) {
      dfs(graph[v][i]);
    }
  }
}
