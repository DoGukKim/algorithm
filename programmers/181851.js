// Title: 전국 대회 선발 고사
// Time: O(n)
// Space: O(n)
function solution(rank, attendance) {
  rank = rank
    .map((v, i) => [v, i])
    .filter((v, i) => attendance[v[1]] === true)
    .sort((a, b) => a[0] - b[0]);

  return 10000 * rank[0][1] + 100 * rank[1][1] + rank[2][1];
}
