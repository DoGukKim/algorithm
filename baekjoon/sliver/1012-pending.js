const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const t = input.shift();
const nr = [-1, 0, 1, 0];
const nc = [0, 1, 0, -1];

let p = 0;
for (let i = 0; i < t; i++) {
  const [m, n, k] = input[p].split(" ").map((i) => Number(i));
  const edges = input.slice(p + 1, k + 1);
  const matrix = Array.from({ length: n }, () => Array(m).fill(0));
  const graph = buildGraph(edges, matrix);

  dfs(graph, 0, 0);

  console.log(graph);

  p += k + 1;
}

function buildGraph(edges, graph) {
  for (let i = 0; i < edges.length; i++) {
    const [c, r] = edges[i].split(" ");
    graph[r][c] = 1;
  }

  return graph;
}

function dfs(graph, r, c) {
  for (let i = 0; i < 4; i++) {
    const row = r + nr[i];
    const colum = c + nc[i];
    const rowInBound = 0 <= row && row < graph.length;
    const columInBound = 0 <= colum && colum < graph[0].length;

    if (rowInBound && columInBound && graph[row][colum] === 1) {
      graph[r][c] = 0;
      dfs(graph, row, colum);
    }
  }
}
