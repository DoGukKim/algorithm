// Title: 다음에 올 숫자
// 방법 1
// Time: O(n)
// Space: O(1)
// InputA: [1, 2, 3, 4] // -> 5
// InputB: [2, 4, 8] // -> 16
function solution(common) {
  let g = null;

  for (let i = 0; i < common.length - 1; i++) {
    if (g === null) g = common[i + 1] - common[i];
    if (g && g !== common[i + 1] - common[i]) {
      // 등비 수열
      return common[common.length - 1] * Math.floor(common[i + 1] / common[i]);
    }
  }

  // 등차 수열
  return common[common.length - 1] + g;
}

// 방법 2
// Time: O(1)
// Space: O(1)
function solution(common) {
  return common[1] - common[0] === common[2] - common[1]
    ? common[common.length - 1] + common[1] - common[0]
    : common[common.length - 1] * 2;
}
