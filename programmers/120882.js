// Title: 등수 매기기
// 방법 1
// Time: O(n^2)
// Space: O(n)
// Input: [[80, 70], [90, 50], [40, 70], [50, 80]]
function solution(score) {
  score = score.map((i) => (i[0] + i[1]) / 2);

  const result = [];
  for (let i = 0; i < score.length; i++) {
    result.push(score.filter((s) => s > score[i]).length + 1);
  }

  return result;
} // -> [1, 2, 4, 3]
