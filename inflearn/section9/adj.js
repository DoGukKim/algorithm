const main = (n, edges) => {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (const edge of edges) {
    const [a, b] = edge;
    graph[a][b] = 1;
  }
  let result = 0;
  const path = [];
  const explore = (v) => {
    if (v === n) {
      result++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          explore(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  };
  path.push(1);
  ch[1] = 1;
  explore(1);
  console.log(result);
};

main(5, [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
]);
