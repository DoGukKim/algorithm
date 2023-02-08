let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();
const graph = {};
for (let i = 0; i < m; i++) {
  const [v, e] = input[i];
  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];
  graph[v].push(e);
  graph[e].push(v);
}

let result = "0";
for (let i = 0; i <= n - 1; i++) {
  const ch = Array.from({ length: n }, () => 0);
  ch[i] = 1;
  dfs(i, ch);
}

console.log(result);

function dfs(v, ch) {
  const stack = [[v, 0]];

  while (stack.length) {
    const [v, dep] = stack.pop();

    if (dep + 1 === 4 && graph[v].length === 1) {
      result = "1";
      break;
    }

    for (let i = 0; i < graph[v].length; i++) {
      if (ch[graph[v][i]] === 0) {
        ch[graph[v][i]] = 1;
        stack.push([graph[v][i], dep + 1]);
      }
    }
  }
}
