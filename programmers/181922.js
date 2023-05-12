// Title: 수열과 구간 쿼리 4
// Time: O(n*m)
// Space: O(1)
function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    for (let j = s; j <= e; j++) {
      if (j % k === 0) arr[j] += 1;
    }
  }
  return arr;
}
