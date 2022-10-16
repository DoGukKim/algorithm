// Title: 종이 자르기
// 방법 1
// Time: O(1)
// Space: O(1)
// Input: 2, 2
function solution(M, N) {
  // 가로 자른 횟수 + 세로 자른 횟수 * 장수
  return M - 1 + (N - 1) * M; // or M * N - 1
} // -> 3
