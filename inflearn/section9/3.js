// Time: O(v*e)
// Space: O(v+e)
function main(n, edges) {
  const graph = {};
  for (let i = 0; i < edges.length; i++) {
    const [v, e] = edges[i];
    if (!(v in graph)) graph[v] = [];
    if (!(e in graph)) graph[e] = [];

    graph[v].push(e);
  }
  // const graph = Array.from({ length: n + 1 }, () => Array());

  let result = 0;
  const visited = {};

  function dfs(v) {
    if (v === n) return result++;

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        visited[graph[v][i]] = true;
        dfs(graph[v][i]);
        visited[graph[v][i]] = false;
      }
    }
  }

  visited[1] = true;
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
