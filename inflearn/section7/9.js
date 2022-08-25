// 방법 1
// Time: O(n log n)
// Space: O(n)
const main = (n) => {
  n.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  const queue = [n[0]];
  for (let i = 1; i < n.length; i += 1) {
    if (queue[0][1] <= n[i][0]) queue.shift();
    queue.push(n[i]);
  }

  return queue.length;
};

console.log(
  main([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
