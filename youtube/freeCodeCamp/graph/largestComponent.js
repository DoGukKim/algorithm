function largestComponent(graph) {
  const visited = {};
  let result = 0;

  for (let v in graph) {
    const size = dfs(v);
    if (result < size) result = size;
  }

  function dfs(src) {
    if (visited[src]) return 0;
    visited[src] = true;

    let cnt = 1;
    for (let i = 0; i < graph[src].length; i++) {
      cnt += dfs(graph[src][i]);
    }

    return cnt;
  }

  return result;
}

function largestComponent(graph) {
  const visited = {};
  let result = 0;

  for (let v in graph) {
    const size = dfs(v);
    if (result < size) result = size;
  }

  function dfs(src) {
    if (visited[src]) return 0;
    const stack = [src];
    let size = 0;

    while (stack.length) {
      const current = stack.pop();
      visited[current] = true;
      size++;

      for (let i = 0; i < graph[current].length; i++) {
        if (!visited[graph[current][i]]) {
          visited[graph[current][i]] = true;
          stack.push(graph[current][i]);
        }
      }
    }
    return size;
  }

  return result;
}

largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
}); // -> 4
