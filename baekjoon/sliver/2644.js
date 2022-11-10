// Title: 촌수계산
// Time: O(v+e)
// Space: O(v+e)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
const [a, b] = input.shift().split(" ");
input.shift();
const edges = input.map((i) => i.split(" "));

const graph = {};
for (let i = 0; i < edges.length; i++) {
  const [v, e] = edges[i];
  if (!(v in graph)) graph[v] = [];
  if (!(e in graph)) graph[e] = [];

  graph[v].push(e);
  graph[e].push(v);
}

const queue = [[a, 0]];
const visited = {};
while (queue.length) {
  let [cur, dis] = queue.shift();
  if (cur === b) return console.log(dis * 1);
  visited[cur] = true;

  for (let i = 0; i < graph[cur].length; i++) {
    if (!visited[graph[cur][i]]) {
      queue.push([graph[cur][i], dis + 1]);
    }
  }
}

console.log(-1);
