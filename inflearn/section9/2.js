// Title: 경로 탐색(인접행렬)
// Time: O(v*e)
// Space: O(v+e)
function main(n, m, edges) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);
  let result = 0;

  for (let i = 0; i < m; i++) {
    const [v, e] = edges[i];
    graph[v][e] = 1;
  }

  function dfs(v) {
    if (v === n) {
      result++;
      return;
    }

    for (let i = 1; i < n + 1; i++) {
      if (ch[i] === 0 && graph[v][i] === 1) {
        ch[i] = 1;
        dfs(i);
        ch[i] = 0;
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
