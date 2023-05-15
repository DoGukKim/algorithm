// Title: 배열 만들기 3
// Time: O(n)
// Space: O(n)
function solution(arr, intervals) {
  const [a1, b1] = intervals[0];
  const [a2, b2] = intervals[1];

  return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}
