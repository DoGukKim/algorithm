const largestComponent = (graph) => {
  let result = -Infinity;
  const visited = new Set();

  for (const vertex in graph) {
    const remainder = explore(graph, vertex, visited);
    if (result < remainder) result = remainder;
  }

  return result;
};

const explore = (graph, vertex, visited) => {
  if (visited.has(vertex)) return 0;

  let size = 1;
  visited.add(vertex);

  for (let i = 0; i < graph[vertex].length; i++) {
    size += explore(graph, graph[vertex][i], visited);
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
