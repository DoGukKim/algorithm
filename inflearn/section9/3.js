// Title: 경로 탐색(인접리스트)
// Time: O(v*e)
// Space: O(v+e)
function main(n, m, edges) {
  const graph = {};
  const ch = Array.from({ length: n + 1 }, () => 0);
  let result = 0;

  for (let i = 0; i < m; i++) {
    const [v, e] = edges[i];

    if (!(v in graph)) graph[v] = [];
    if (!(e in graph)) graph[e] = [];

    graph[v].push(e);
  }

  function dfs(v) {
    if (v === n) {
      result++;
      return;
    }

    for (let i = 0; i < graph[v].length; i++) {
      if (ch[graph[v][i]] === 0) {
        ch[graph[v][i]] = 1;
        dfs(graph[v][i]);
        ch[graph[v][i]] = 0;
      }
    }
  }
  ch[1] = 1;
  dfs(1);

  console.log(result);
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

main(5, 9, edges);
