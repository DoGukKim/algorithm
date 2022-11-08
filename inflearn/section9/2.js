// 방법 1
// Time: O()
// Space: O()
function main(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i < edges.length; i++) {
    const [v, e] = edges[i];
    graph[v][e] = 1;
  }

  const visited = {};
  // const visited = new Set()
  // const visited = Array.from({ length: n + 1 }, () => 0);

  let result = 0;

  function dfs(v) {
    if (v === n) return result++;

    for (let i = 1; i < graph[v].length; i++) {
      if (graph[v][i] === 1 && !visited[i]) {
        visited[i] = true;
        dfs(i);
        visited[i] = false;
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
