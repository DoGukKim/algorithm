// 방법 1
// Time: O(v+e)
// Space: O(n)
const main = (n, edges) => {
  // 인접행렬 생성
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  // 그래프 초기화
  for (let i = 0; i < edges.length; i++) {
    const [v, e] = edges[i];
    graph[v][e] = 1;
  }

  const visited = new Set(); // or 아래와 같이 방문 자료 생성
  // const visited = Array.from({ length: n + 1 }, () => 0);
  let result = 0;

  function dfs(v) {
    if (v === n) {
      result++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      // i는 정점을 뜻하며 1부터 n까지 현재 v정점과 연결되어 있는지 확인하고
      // 방문하지 않을 경우에 탐색을 재귀적으로 호출해 n에 도달하는지를 확인합니다.
      if (graph[v][i] === 1 && !visited.has(i)) {
        visited.add(i);
        dfs(i);
        // 방문했던 기록은 초기화 해야 됩니다.
        visited.delete(i);
      }
    }
  }
  visited.add(1);
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

// 방법 2
// Time: O(v+e)
// Space: O(n)
const main2 = (n, edges) => {
  // 인접 리스트 생성
  const graph = Array.from({ length: n + 1 }, () => Array());

  // or 아래와 같이 해시로 리스트와 초기화를 할 수 있습니다.
  // const graph = {};
  // for (let i = 0; i < edges.length; i++) {
  //   const [v, e] = edges[i];

  //   if (!(v in graph)) graph[v] = [];
  //   if (!(e in graph)) graph[e] = [];

  //   graph[v].push(e);
  // }

  // 그래프 초기화
  for (let i = 0; i < edges.length; i++) {
    const [v, e] = edges[i];
    graph[v].push(e);
  }

  const visited = new Set();
  let result = 0;

  function dfs(v) {
    if (v === n) {
      result++;
      return;
    }

    // 방문한 정점을 저장합니다.
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
