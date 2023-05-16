// Title: 무작위로 K개의 수 뽑기
// Time: O(n)
// Space: O(k)
function solution(arr, k) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.size >= k) break;
    if (!map.has(arr[i])) map.set(arr[i], arr[i]);
  }

  const result = [...map.values()];

  if (result.length < k)
    return result.concat(Array.from({ length: k - result.length }, () => -1));

  return result;
}
