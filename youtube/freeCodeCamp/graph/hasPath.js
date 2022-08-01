const hasPath = (graph, vertex, target) => {
  const stack = [vertex];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current === target) return true;

    for (let i = 0; i < graph[current].length; i++) {
      stack.push(graph[current][i]);
    }
  }

  return false;
};

console.log(hasPath(graph, "f", "k"));

const hasPath2 = (graph, vertex, target) => {
  if (vertex === target) return true;

  for (let i = 0; i < graph[vertex].length; i++) {
    if (hasPath2(graph, graph[vertex][i], target) === true) return true;
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

console.log(hasPath2(graph, "f", "k"));
