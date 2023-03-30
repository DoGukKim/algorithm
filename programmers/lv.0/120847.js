// Title: 최댓값 구하기(1)
// Time: O(n log n)
// Space: O(1)
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

// 그리디하게 설계해 풀면 된다.
