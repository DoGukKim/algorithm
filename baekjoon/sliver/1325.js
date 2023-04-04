// Title: 효율적인 해킹
// Time: O(n^2)
// Space: O(n^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));
const graph = {};
for (let i = 0; i < m; i++) {
  const [a, b] = input[i];
  if (!(b in graph)) graph[b] = [];
  graph[b].push(a);
}

const count = Array.from({ length: n + 1 }, () => 0);
for (let i = 1; i <= n; i++) {
  const ch = Array.from({ length: n + 1 }, () => 0);
  ch[i] = 1;
  count[i] = dfs(i, ch);
}

const max = Math.max(...count);
let result = "";
for (let i = 0; i <= n; i++) {
  if (max === count[i]) result += `${i} `;
}
console.log(result);

function dfs(v, ch) {
  const stack = [v];
  let cnt = 0;

  while (stack.length) {
    const v = stack.pop();
    if (!(v in graph)) continue;

    for (let i = 0; i < graph[v].length; i++) {
      if (ch[graph[v][i]] === 0) {
        ch[graph[v][i]] = 1;
        cnt++;
        stack.push(graph[v][i]);
      }
    }
  }

  return cnt;
}
