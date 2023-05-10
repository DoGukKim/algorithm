// Title: 종이 자르기
// Time: O(1)
// Space: O(1)
function solution(M, N) {
  // 가로 자른 횟수 + 세로 자른 횟수 * 장수
  return M - 1 + (N - 1) * M;
}
