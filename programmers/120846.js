// Title: 합성수 찾기
// Time: O(nm)
// Space: O(1)
function solution(n) {
  let result = 0;
  for (let i = 4; i <= n; i++) {
    if (!isPrime(i)) {
      result++;
    }
  }
  return result;

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
