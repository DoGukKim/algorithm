// Title: 세 수 중 최솟값
// 방법 1
// Time: O(1)
// Space: O(1)
function main(a, b, c) {
  return Math.min(a, b, c);
}

// 방법 2
// Time: O(1)
// Space: O(1)
function main(a, b, c) {
  let min = Infinity;

  if (a < min) min = a;
  if (b < min) min = b;
  if (c < min) min = c;

  return min;
}

console.log(main(6, 5, 11));
