// Title: 수열과 구간 쿼리 3
// Time: O(n)
// Space: O(1)
function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [lt, rt] = queries[i];
    [arr[lt], arr[rt]] = [arr[rt], arr[lt]];
  }

  return arr;
}
