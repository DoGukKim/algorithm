// Time: O(e)
// Space: O(n)
const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (const vertex in graph) {
    if (explore(graph, vertex, visited) === true) count += 1;
  }

  return count;
};

const explore = (graph, vertex, visited) => {
  if (visited.has(String(vertex))) return false;

  visited.add(String(vertex));

  for (let i = 0; i < graph[vertex].length; i++) {
    explore(graph, graph[vertex][i], visited);
  }

  return true;
};

connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}); // -> 2
