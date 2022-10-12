// Title: 멘토링
// 방법 1
// Time: O(n^3)
// Space: O(n)
// Input:
// 4,
// 3, 4, 1, 2
// 4, 3, 2, 1
// 3, 1, 4, 2
function main(n, m) {
  const s = Array.from({ length: n }, (_, v) => v + 1);
  let result = 0;

  for (let i = 0; i < n; i++) {
    let maxRank = -Infinity;
    for (let j = 0; j < m.length; j++) {
      const rank = m[j].indexOf(s[i]);
      if (rank > maxRank) maxRank = rank;
    }

    // 학생들의 수 - 자신의 최대 마지막 랭크
    // 예: 나를 제외한(-1) 3명 중 최대 마지막 랭크 3를 빼면 멘토가 될 수 있는 경우 0이 도출
    result += n - 1 - maxRank;
  }

  return result;
}

console.log(
  main(4, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
); // -> 3
