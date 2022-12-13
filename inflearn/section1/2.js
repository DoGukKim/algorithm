// Title: 삼각형 판별하기
// 방법 1
// Time: O(1)
// Space: O(1)
function main(a, b, c) {
  const max = Math.max(a, b, c);
  console.log(max < a + b + c - max ? "YES" : "NO");
}

main(6, 7, 11);
main(13, 33, 17);
