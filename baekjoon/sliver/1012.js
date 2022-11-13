// Title: 유기농 배추
// Time: O(t*(m*n))
// Space: O(m+n)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const nr = [-1, 0, 1, 0];
const nc = [0, 1, 0, -1];
const t = input.shift();
let worms;

for (let i = 0; i < t; i++) {
  worms = 0;

  const [m, n, k] = input
    .shift()
    .split(" ")
    .map((i) => Number(i));

  const edges = input.splice(0, k);
  const graph = buildGraph(m, n, edges);
  const visited = new Set();

  for (let r = 0; r < graph.length; r++) {
    for (let c = 0; c < graph[0].length; c++) {
      if (graph[r][c] === 1) {
        if (dfs(graph, r, c, visited) === true) {
          worms++;
        }
      }
    }
  }

  console.log(worms);
}

function buildGraph(m, n, edges) {
  const matrix = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < edges.length; i++) {
    const [c, r] = edges[i].split(" ");
    matrix[r][c] = 1;
  }

  return matrix;
}

function dfs(graph, r, c, visited) {
  const rowInBound = 0 <= r && r < graph.length;
  const columInBound = 0 <= c && c < graph[0].length;

  if (!rowInBound || !columInBound) return false;
  if (graph[r][c] === 0) return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  for (let i = 0; i < 4; i++) {
    const row = r + nr[i];
    const colum = c + nc[i];
    dfs(graph, row, colum, visited);
  }

  return true;
}
