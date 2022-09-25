// Time: O(v+e)
// Space: O(n)
const main = (n, edges) => {
  const graph = Array.from({ length: n + 1 }, () => Array());
  const visited = Array.from({ length: n + 1 }, () => 0);

  for (let i = 0; i < edges.length; i++) {
    const [v, e] = edges[i];
    graph[v].push(e);
  }

  let result = 0;
  function dfs(v) {
    if (v === n) {
      result++;
      return;
    }

    for (let i = 0; i < graph[v].length; i++) {
      if (visited[graph[v][i]] === 0) {
        visited[graph[v][i]] = 1;
        dfs(graph[v][i]);
        visited[graph[v][i]] = 0;
      }
    }
  }

  visited[1] = 1;
  dfs(1);

  return result;
};

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
