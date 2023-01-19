// Title: 트리의 부모 찾기
// Time: O(v*e)
// Space: O(v+e)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
const p = Array.from({ length: n + 1 }, () => 0);
const stack = [1];
const graph = {};
for (let i = 0; i < input.length; i++) {
  const [v, e] = input[i];
  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];
  graph[v].push(e);
  graph[e].push(v);
}

while (stack.length) {
  const cur = stack.pop();

  for (let i = 0; i < graph[cur].length; i++) {
    if (p[graph[cur][i]] !== 0) continue;
    p[graph[cur][i]] = cur;
    stack.push(graph[cur][i]);
  }
}

let result = "";
for (let i = 2; i < p.length; i++) {
  result += `${p[i]}\n`;
}
console.log(result);
