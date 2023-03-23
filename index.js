// Title: 결혼식
// Time: O(n log n)
// Space: O(n)
function main(n, record) {
  record.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
}

main(5, [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]);
