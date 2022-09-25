// 방법 1
// Time: O(v+e)
// Space: O(n)
const main = (n, edges) => {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i < edges.length; i++) {
    // 인정행렬 그래프를 생성해 줍니다.
    const [v, e] = edges[i];
    graph[v][e] = 1;
  }

  const visited = Array.from({ length: n + 1 }, () => 0);
  let result = 0;

  function dfs(v) {
    if (v === n) {
      result++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      // i는 정점을 뜻하며 1부터 n까지 현재 v정점과 연결되어 있는지 확인하고
      // 방문하지 않을 경우에 탐색을 재귀적으로 호출해 n에 도달하는지를 확인합니다.
      if (graph[v][i] === 1 && visited[i] === 0) {
        visited[i] = 1;
        dfs(i);
        // 백 트랙킹
        // 방문했던 기록은 초기화 해야 됩니다.
        visited[i] = 0;
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
console.log(main(5, edges)); // -> 6

// 방법 2
// Time: O(v+e)
// Space: O(n)
const main2 = (n, edges) => {
  const graph = {};
  for (let i = 0; i < edges.length; i++) {
    const [v, e] = edges[i];

    if (!(v in graph)) graph[v] = [];
    if (!(e in graph)) graph[e] = [];

    graph[v].push(e);
  }

  let result = 0;
  const visited = new Set();
  function dfs(v) {
    if (v === n) {
      result++;
      return;
    }

    visited.add(v);
    for (let i = 0; i < graph[v].length; i++) {
      if (!visited.has(graph[v][i])) {
        dfs(graph[v][i]);
        visited.delete(v);
      }
    }
  }
  dfs(1);

  return result;
};

console.log(main2(5, edges)); // -> 6
