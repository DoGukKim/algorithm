// Title: 가장 먼 노드
// Time: O(v+e)
// Space: O(v+e)
function solution(n, edge) {
  const graph = {};

  for (let i = 0; i < edge.length; i++) {
    const [v, e] = edge[i];
    if (!(v in graph)) graph[v] = [];
    if (!(e in graph)) graph[e] = [];
    graph[v].push(e);
    graph[e].push(v);
  }

  const d = Array.from({ length: n }, () => 0);
  const queue = [[1, 0]];
  let max = -Infinity;
  const visited = {};

  while (queue.length) {
    const [v, dis] = queue.shift();
    visited[v] = true;
    d[v - 1] = dis;

    if (dis > max) max = dis;

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        queue.push([graph[v][i], dis + 1]);
        visited[graph[v][i]] = true;
      }
    }
  }

  return d.filter((i) => i === max).length;
}
