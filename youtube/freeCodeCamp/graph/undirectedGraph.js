const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  const stack = [nodeA];
  const visited = {};
  while (stack.length) {
    const current = stack.pop();
    visited[current] = true;

    for (let i = 0; i < graph[current].length; i++) {
      if (graph[current][i] === nodeB) return true;
      if (!visited[graph[current][i]]) {
        stack.push(graph[current][i]);
      }
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
