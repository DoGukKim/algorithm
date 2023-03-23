// Title: 좌표 정렬
// Time: O(n log n)
// Space: O(1)
function main(_, xy) {
  xy.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  console.log(xy);
}

main(5, [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
]);
