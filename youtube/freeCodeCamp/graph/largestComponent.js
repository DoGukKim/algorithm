const largestComponent = (graph) => {
  let result = -Infinity;
  const visited = new Set();

  for (const vertex in graph) {
    const remainder = exploreSize(graph, vertex, visited);
    if (remainder > result) result = remainder;
  }

  return result;
};

const exploreSize = (graph, vertex, visited) => {
  if (visited.has(vertex)) return 0;

  visited.add(vertex);
  let size = 1;

  for (let i = 0; i < graph[vertex].length; i++) {
    size += exploreSize(graph, graph[vertex][i], visited);
  }

  return size;
};

largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
}); // -> 4
