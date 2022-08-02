const shortestPath = (edges, vertex, target) => {
  const graph = buildGraph(edges);
  const queue = [[vertex, 0]]; // 0은 distance의 초기값
  const visited = new Set();

  while (queue.length > 0) {
    const [v, distance] = queue.shift();

    if (v === target) return distance;

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited.has(graph[v][i])) {
        visited.add(graph[v][i]);
        queue.push([graph[v][i], distance + 1]);
      }
    }
  }

  return -1;
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
