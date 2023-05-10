// Title: 홀짝에 따라 다른 값 반환하기
// Time: O(n)
// Space: O(1)
function solution(n) {
  let result = 0;
  const isOdd = n % 2 === 1;

  for (let i = 1; i <= n; i++) {
    if (isOdd && i % 2 === 1) result += i;
    if (!isOdd && i % 2 === 0) result += i ** 2;
  }

  return result;
}
