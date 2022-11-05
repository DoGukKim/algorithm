function shortestPath(edges, nodeA, nodeB) {
  const graph = buildGraph(edges);
  const visited = new Set(nodeA);
  const queue = [[nodeA, 0]];

  while (queue.length) {
    const [cur, dis] = queue.shift();
    if (cur === nodeB) return dis;

    for (let i = 0; i < graph[cur].length; i++) {
      if (!visited.has(graph[cur][i])) {
        visited.add(graph[cur][i]);
        queue.push([graph[cur][i], dis + 1]);
      }
    }
  }
  return -1;
}

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
