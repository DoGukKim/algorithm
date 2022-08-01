const undirectedPath = (edges, vertex, target) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const stack = [vertex];

  while (stack.length > 0) {
    const current = stack.pop();

    if (visited.has(current)) continue;
    if (current === target) return true;

    visited.add(current);

    for (let i = 0; i < graph[current].length; i++) {
      stack.push(graph[current][i]);
    }
  }

  return false;
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
}; // ->
// {
//     i: [ 'j', 'k' ],
//     j: [ 'i' ],
//     k: [ 'i', 'm', 'l' ],
//     m: [ 'k' ],
//     l: [ 'k' ],
//     o: [ 'n' ],
//     n: [ 'o' ]
//   }

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
]; // -> true

console.log(undirectedPath(edges, "j", "m"));

// 재귀식 풀이
const undirectedPath2 = (edges, vertex, target) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  return hasPath(graph, vertex, target, visited);
};

const hasPath = (graph, vertex, target, visited) => {
  if (visited.has(vertex)) return false;
  if (vertex === target) return true;

  visited.add(vertex);

  for (let i = 0; i < graph[vertex].length; i++) {
    if (hasPath(graph, graph[vertex][i], target, visited) === true) return true;
  }

  return false;
};

console.log(undirectedPath2(edges, "j", "m"));
