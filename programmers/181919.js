// Title: 콜라츠 수열 만들기
// Time: O(n)
// Space: O(n)
function solution(n) {
  const result = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = Math.floor(n / 2);
      result.push(n);
      continue;
    } else {
      n = 3 * n + 1;
      result.push(n);
    }
  }

  return result;
}
