// Time: O(v*e)
// Space: O(v+e)
function main(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i < edges.length; i++) {
    const [v, e] = edges[i];
    graph[v][e] = 1;
  }

  const visited = Array.from({ length: n + 1 }, () => 0);
  // const visited = new Set();
  // const visited = {};
  let result = 0;

  function dfs(v) {
    if (v === n) return result++;

    for (let i = 1; i < graph[v].length; i++) {
      if (graph[v][i] === 1 && visited[i] === 0) {
        visited[i] = 1;
        dfs(i);
        visited[i] = 0;
      }
    }
  }
  visited[1] = 1;
  dfs(1);

  return result;
}

const edges = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(main(5, edges));
