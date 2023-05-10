// Title: 더 크게 합치기
// Time: O(1)
// Space: O(1)
function solution(a, b) {
  const A = String(a) + String(b);
  const B = String(b) + String(a);
  return A === B ? Number(A) : Math.max(Number(A), Number(B));
}
