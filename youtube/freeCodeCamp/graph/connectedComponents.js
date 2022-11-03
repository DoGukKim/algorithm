// Time: O(v*e)
// Space: O(v+e)
function connectedComponentsCount(graph) {
  let result = 0;
  const visited = {};

  for (let v in graph) {
    // 방문한 정점은 다시 방분하지 않음
    if (!visited[v]) {
      result++;
      dfs(v);
    }
  }

  function dfs(src) {
    visited[src] = true;

    for (let i = 0; i < graph[src].length; i++) {
      // 방문한 정점은 다시 방분하지 않음
      if (!visited[graph[src][i]]) {
        dfs(graph[src][i]);
      }
    }
  }

  return result;
}

// Time: O(v+e)
// Space: O(v+e)
function connectedComponentsCount(graph) {
  let result = 0;
  const visited = {};

  for (let v in graph) {
    if (!visited[v]) {
      result++;
      dfs(v);
    }
  }

  function dfs(src) {
    const stack = [src];

    while (stack.length) {
      const current = stack.pop();
      visited[current] = true;

      for (let i = 0; i < graph[current].length; i++) {
        if (!visited[graph[current][i]]) {
          stack.push(graph[current][i]);
        }
      }
    }
  }

  return result;
}

connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}); // -> 2
