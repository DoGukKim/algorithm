const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for (let vertex in graph) {
    if (explore(graph, vertex, visited) === true) count++;
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));
  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
};
