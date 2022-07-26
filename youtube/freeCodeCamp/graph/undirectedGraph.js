const undirectedPath = (edges, source, target) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  return hasPath(graph, source, target, visited);
};

const hasPath = (graph, source, target, visited) => {
  if (visited.has(source)) return false;
  if (source === target) return true;

  visited.add(source);

  for (let i = 0; i < graph[source].length; i++) {
    if (hasPath(graph, graph[source][i], target, visited) === true) return true;
  }

  return false;
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
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
]; // -> true

console.log(undirectedPath(edges, "j", "m"));
