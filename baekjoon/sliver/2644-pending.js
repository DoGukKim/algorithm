// Title: 촌수계산
// Time: O()
// Space: O()
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const [n, m] = input.shift().split(" ");

input.shift();
const edges = input.map((i) => i.split(" "));

const graph = {};
for (let i = 0; i < edges.length; i++) {
  const [v, e] = edges[i];
  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];

  graph[v].push(e);
}

const stack = ["1"];

while (stack.length) {
  const current = stack.pop();

  const isChild = graph[current].some((i) => i === n);
  if (isChild) {
    if (current === m) return console.log("1");
    if (graph[m] && graph[m].some((i) => i === current)) {
      return console.log("2");
    }
    for (const key in graph) {
      const si = graph[key].some((i) => i === m);
      const su = graph[key].some((i) => i === current);
      if (si && su) {
        return console.log("3");
      }
    }
  }

  for (let i = 0; i < graph[current].length; i++) {
    stack.push(graph[current][i]);
  }
}

console.log("-1");
