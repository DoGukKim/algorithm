// Title: 효율적인 해킹
// Time: O(v^2e)
// Space: O(v^2+e)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input[0];
const h = Array.from({ length: n + 1 }, () => 0);
let max = 0;
const graph = {};
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i];
  if (!(b in graph)) graph[b] = [];
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  const ch = Array.from({ length: n + 1 }, () => 0);
  ch[i] = 1;
  const cnt = dfs(i, ch);
  h[i] = cnt;
  if (max < cnt) max = cnt;
}

let result = "";
for (let i = 0; i < h.length; i++) {
  if (max === h[i]) result += `${i} `;
}
console.log(result);

function dfs(v, ch) {
  const stack = [v];
  let cnt = 0;

  while (stack.length) {
    const c = stack.pop();
    if (!(c in graph)) continue;
    for (let i = 0; i < graph[c].length; i++) {
      if (ch[graph[c][i]] === 0) {
        cnt++;
        ch[graph[c][i]] = 1;
        stack.push(graph[c][i]);
      }
    }
  }

  return cnt;
}
