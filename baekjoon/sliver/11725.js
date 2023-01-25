// Title: 트리의 부모 찾기
// Time: O(ve)
// Space: O(v+e)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
const p = Array.from({ length: n + 1 }, () => 0);
const graph = {};
for (let i = 0; i < input.length; i++) {
  const [v, e] = input[i];
  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];
  graph[v].push(e);
  graph[e].push(v);
}

const stack = ["1"];
while (stack.length) {
  const v = stack.pop();
  for (let i = 0; i < graph[v].length; i++) {
    if (p[graph[v][i]] === 0) {
      p[graph[v][i]] = v;
      stack.push(graph[v][i]);
    }
  }
}

let result = "";
for (let i = 2; i < p.length; i++) {
  result += `${p[i]}\n`;
}
console.log(result);
