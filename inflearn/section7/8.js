// Time: O(n log n)
// Space: O(1)
const main = (arr) => {
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let result = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= end) {
      end = arr[i][1];
      result++;
    }
  }

  return result;
};

console.log(
  main([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

// main([
//   [3, 3],
//   [1, 3],
//   [2, 3],
// ]);
