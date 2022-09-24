const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m, src] = input.shift().split(" ");

const buildGraph = (edges) => {
  const graph = {};

  for (let i = 0; i < edges.length; i++) {
    const [v, e] = (edges[i] = edges[i].split(" "));

    if (!(v in graph)) graph[v] = [];
    if (!(e in graph)) graph[e] = [];

    graph[v].push(e);
    graph[e].push(v);
  }

  return graph;
};

const graph = buildGraph(input);

const dfs = () => {
  const visited = new Set();
  const dfsPath = [];
  const stack = [src];

  while (stack.length) {
    const current = stack.pop();
    if (visited.has(current)) continue;

    dfsPath.push(current);
    visited.add(current);

    const sorted = graph[current].sort((a, b) => b - a);
    for (let i = 0; i < sorted.length; i++) {
      stack.push(sorted[i]);
    }
  }

  return dfsPath.join(" ");
};

const bfs = () => {
  const visited = new Set();
  const bfsPath = [];
  const queue = [src];

  while (queue.length) {
    const current = queue.shift();
    if (visited.has(current)) continue;

    bfsPath.push(current);
    visited.add(current);

    const sorted = graph[current].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
      queue.push(sorted[i]);
    }
  }

  return bfsPath.join(" ");
};

console.log(dfs());
console.log(bfs());
