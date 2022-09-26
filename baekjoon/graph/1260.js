const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

// Time: O(v+e)
// Space: O(n)
const [n, _, v] = input.shift().split(" ");
const graph = Array.from({ length: Number(n) + 1 }, () => Array());

for (let i = 0; i < input.length; i++) {
  const [v, e] = input[i].split(" ");
  graph[v].push(e);
  graph[e].push(v);
}

const dfsPath = [];
const visitedByDFS = new Set();
const dfs = (v) => {
  if (visitedByDFS.has(v)) {
    return;
  }

  visitedByDFS.add(v);
  dfsPath.push(v);

  const sorted = graph[v].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    dfs(sorted[i]);
  }
};

const bfsPath = [];
const visitedByBFS = new Set();
const bfs = (v) => {
  const queue = [v];

  while (queue.length) {
    const current = queue.shift();
    if (visitedByBFS.has(current)) continue;

    visitedByBFS.add(current);
    bfsPath.push(current);

    const sorted = graph[current].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
      queue.push(sorted[i]);
    }
  }
};

dfs(v);
bfs(v);
console.log(dfsPath.join(" "));
console.log(bfsPath.join(" "));
