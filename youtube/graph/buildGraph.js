const buildGraph = (edges) => {
  const graph = {};

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];

    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(buildGraph(edges));
