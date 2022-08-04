const main = (n, arr) => {
  const graph = Array.from({ length: n + 1 }, () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  let result = 0;
  let path = [];

  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) {
      result++;
    } else {
      for (let nv of graph[v]) {
        if (ch[nv] === 0) {
          path.push(nv);
          ch[nv] = 1;
          DFS(nv);
          ch[nv] = 0;
          path.pop();
        }
      }
    }
  }
  ch[1] = 1;
  path.push(1);
  DFS(1);
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
