// Title: 조건 문자열
// Time: O(1)
// Space: O(1)
function solution(ineq, eq, n, m) {
  const calcMap = {
    ">,=": (a, b) => a >= b,
    "<,=": (a, b) => a <= b,
    ">,!": (a, b) => a > b,
    "<,!": (a, b) => a < b,
  };

  return calcMap[[ineq, eq]](n, m) ? 1 : 0;
}
