// Time: O(n^2)
// Space: O(n)
const hasPath = (graph, source, target) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current === target) return true;

    for (let i = 0; i < graph[current].length; i++) {
      stack.push(graph[current][i]);
    }
  }

  return false;
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
}; // true

console.log(hasPath(graph, "f", "k"));

const recursionHasPath = (graph, source, target) => {
  if (source === target) return true;

  for (let i = 0; i < graph[source].length; i++)
    if (recursionHasPath(graph, graph[source][i], target) === true) return true;

  return false;
};

console.log(recursionHasPath(graph, "f", "k"));
