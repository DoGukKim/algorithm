// Title: 저주의 숫자 3
// 방법 1
// Time: O()
// Space: O()
// Input: 15
function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result++;
    while (result % 3 === 0 || result.toString().includes("3")) {
      result++;
    }
  }

  return result;
} // -> 25
