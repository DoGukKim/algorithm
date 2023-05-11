// Title: 수열과 구간 쿼리 2
// Time: O(n*m)
// Space: O(n)
function solution(arr, queries) {
  let result = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    let min = Infinity;

    for (let j = s; j <= e; j++) {
      if (arr[j] > k) min = Math.min(min, arr[j]);
    }

    if (min !== Infinity) result.push(min);
    else result.push(-1);
  }

  return result;
}
