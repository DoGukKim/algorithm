// Title: 좌표 정렬
// Time: O(n log n)
// Space: O(1)
function main(n) {
  n = n.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  console.log(n);
}

main([
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
]);
