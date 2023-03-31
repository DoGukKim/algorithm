// Title: 가까운 수
// 방법1
// Time: O(n log n)
// Space: O(n)
function solution(array, n) {
  array = array.map((i) => [i, Math.abs(n - i)]);
  array.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  return array[0][0];
}

// 방법 2
// Time: O(n)
// Space: O(1)
function solution(array, n) {
  let result = Infinity;
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(n - array[i]) < min) {
      result = array[i];
      min = Math.abs(n - array[i]);
      continue;
    }
    if (Math.abs(n - array[i]) === min && result > array[i]) result = array[i];
  }
  return result;
}
