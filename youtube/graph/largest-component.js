const largestComponent = (graph) => {
  let result = 0;
  const visited = new Set();
  for (let vertex in graph) {
    const size = exploreSize(graph, vertex, visited);
    if (size > result) result = size;
  }
  return result;
};

const exploreSize = (graph, vertex, visited) => {
  if (visited.has(vertex)) return 0;
  visited.add(vertex);
  let size = 1;
  for (let neighbor of graph[vertex]) {
    size += exploreSize(graph, neighbor, visited);
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
