// 방법 1
// Time: O(n log n)
// Space: O(1)
const main = (n) => {
  n = n.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return n;
};

console.log(
  main([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
