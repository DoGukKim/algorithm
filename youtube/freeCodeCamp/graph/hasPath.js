// 방법: DFS
// Time: O(v+e)
// Space: O(v+e)
function hasPath(graph, src, dst) {
  const stack = [src];
  const visited = {};

  while (stack.length) {
    const current = stack.pop();
    visited[current] = true;

    for (let i = 0; i < graph[current].length; i++) {
      if (graph[current][i] === dst) return true;
      if (!visited[graph[current][i]]) {
        stack.push(graph[current][i]);
      }
    }
  }

  return false;
}

// 방법: BFS
// Time: O(v+e)
// Space: O(v+e)
function hasPath(graph, src, dst) {
  const queue = [src];
  const visited = {};

  while (queue.length) {
    const current = queue.shift();
    visited[current] = true;

    for (let i = 0; i < graph[current].length; i++) {
      if (graph[current][i] === dst) return true;
      if (!visited[graph[current][i]]) {
        queue.push(graph[current][i]);
      }
    }
  }

  return false;
}

// 방법: DFS(Recursive)
// Time: O(v*e)
// Space: O(v+e)
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let i = 0; i < graph[src].length; i++) {
    if (hasPath(graph, graph[src][i]) === true) return true;
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
