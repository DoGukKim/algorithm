// Title: 간단한 식 계산하기
// Time: O(1)
// Space: O(1)
function solution(n) {
  function solution(binomial) {
    const map = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
    };

    const [a, o, b] = binomial.split(" ");
    return map[o](Number(a), Number(b));
  }
}
