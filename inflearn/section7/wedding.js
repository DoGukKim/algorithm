// TimeComplexity O(n log n)
// SpaceComplexity O(n)
const main = (arr) => {
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  const queue = [arr[0]];
  for (let i = 1; i < arr.length; i += 1) {
    if (queue[0][1] <= arr[i][0]) queue.shift();
    queue.push(arr[i]);
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
