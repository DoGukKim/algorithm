const shortestPath = (edges, vertex, target) => {
  const graph = buildGraph(edges);
};

const buildGraph = (edges) => {
  const graph = {};

  for (let i = 0; i < edges.length; i++) {
    const [v, e] = edges[i];
    if (!(v in graph)) graph[v] = [];
    if (!(e in graph)) graph[e] = [];

    graph[v].push(e);
    graph[e].push(v);
  }

  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z")); // -> 2;
