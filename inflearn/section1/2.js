// Title: 삼각형 판별하기
// 방법 1
// Time: O(n)
// Space: O(1)
function main(a, b, c) {
  const max = Math.max(a, b, c);
  return a + b + c - max <= max ? "NO" : "YES";
}

console.log(main(6, 7, 11)); // -> YES
console.log(main(13, 33, 17)); // -> NO
