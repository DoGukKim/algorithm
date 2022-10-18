// Title: 진료 순서 정하기
// 방법 1
// Time: O(n^2)
// Space: O(n)
// Input: [3, 76, 24]
function solution(emergency) {
  const result = [];

  for (let i = 0; i < emergency.length; i++) {
    const p = emergency.filter((o) => emergency[i] < o).length;
    result.push(p + 1);
  }

  return result;
} // -> [3, 1, 2]
