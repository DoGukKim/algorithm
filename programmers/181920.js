// Title: 카운트 업
// Time: O(n)
// Space: O(n)
function solution(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}
