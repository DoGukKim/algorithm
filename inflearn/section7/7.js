// Title: 좌표 정렬
// 방법 1
// Time: O(n log n)
// Space: O(1)
// Input: [2, 7], [1, 3], [1, 2], [2, 5], [3, 6]
function main(n) {
  n = n.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return n;
}

console.log(
  main([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
); // ->
// 1,2
// 1,3
// 2,5
// 2,7
// 3,6
