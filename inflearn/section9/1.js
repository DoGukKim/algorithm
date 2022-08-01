const main = (edges) => {
  const graph = buildGraph(edges);
  let result = 0;

  for (const vertex in graph) {
    const remainder = explore(graph, vertex, 5);
    result = Math.max(remainder, result);
  }

  return result;
};

const explore = (graph, vertex, target, visited = new Set()) => {
  if (visited.has(String(vertex))) return 0;
  if (vertex === target) return 1;

  visited.add(String(vertex));

  let count = 1;

  for (let i = 0; i < graph[vertex].length; i++) {
    count += explore(graph, graph[vertex][i], target, visited);
  }

  return count;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
  }

  return graph;
};

console.log(
  main([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
