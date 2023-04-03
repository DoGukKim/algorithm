// Title: 트리의 부모 찾기
// Time: O(n+m)
// Space: O(n+m)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input.slice(1).map((i) => i.split(" ").map(Number));
const graph = {};
for (let i = 0; i < input.length; i++) {
  const [v, e] = input[i];
  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];
  graph[v].push(e);
  graph[e].push(v);
}

const eachNodeParents = Array.from({ length: n + 1 }, () => 0);
dfs("1");
let result = "";
for (let i = 2; i <= n; i++) result += `${eachNodeParents[i]}\n`;
console.log(result);

function dfs(v) {
  const stack = [v];

  while (stack.length) {
    const v = stack.pop();

    for (let i = 0; i < graph[v].length; i++) {
      if (eachNodeParents[graph[v][i]] === 0) {
        eachNodeParents[graph[v][i]] = v;
        stack.push(graph[v][i]);
      }
    }
  }
}
