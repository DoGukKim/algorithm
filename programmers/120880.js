// Title: 특이한 정렬
// Time: O(n log n)
// Space: O(n log n)
function solution(numlist, n) {
  numlist = numlist.map((i) => [i, Math.abs(n - i)]);

  numlist.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    return a[1] - b[1];
  });

  return numlist.map((i) => i[0]);
}
