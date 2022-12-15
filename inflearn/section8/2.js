// Title: 재귀함수를 이용한 이진수 출력
// Time: O(n)
// Space: O(n)
function main(n) {
  if (n <= 0) return "";
  return main(Math.floor(n / 2)) + String(n % 2);
}

console.log(main(11));
