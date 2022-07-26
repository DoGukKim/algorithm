const shortestPath = (edges, start, end) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  const queue = [[start, 0]];
  while (queue.length > 0) {
    const [vertex, distance] = queue.shift();
    if (vertex === end) return distance;

    for (let i = 0; i < graph[vertex].length; i++) {
      if (!visited.has(graph[vertex][i])) {
        visited.add(graph[vertex][i]);
        queue.push([graph[vertex][i], distance + 1]);
      }
    }
  }
};

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
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

shortestPath(edges, "w", "z"); // -> 2
