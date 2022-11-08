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
