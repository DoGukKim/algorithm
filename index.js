const main = (n, arr) => {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);
  for (const [a, b] of arr) {
    graph[a][b] = 1;
  }

  console.log(graph);
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
