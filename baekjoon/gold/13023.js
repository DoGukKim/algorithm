// Title: ABCDE
// Time: O(n^2)
// Space: O(n+m)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();
let result = 0;
const graph = {};
for (let i = 0; i < m; i++) {
  const [v, e] = input[i];
  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];
  graph[v].push(e);
  graph[e].push(v);
}

const ch = Array.from({ length: n }, () => 0);
for (let i = 0; i <= n - 1; i++) {
  ch[i] = 1;
  const hasFriendShip = dfs(i, 0, ch);
  ch[i] = 0;
  if (hasFriendShip) {
    result = 1;
    break;
  }
}
console.log(result);

function dfs(v, dep, ch) {
  if (dep === 4) return true;

  for (let i = 0; i < graph[v]?.length ?? 0; i++) {
    if (ch[graph[v][i]] === 0) {
      ch[graph[v][i]] = 1;
      const hasFriendShip = dfs(graph[v][i], dep + 1, ch);
      ch[graph[v][i]] = 0;
      if (hasFriendShip) return true;
    }
  }

  return false;
}
