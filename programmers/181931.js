// Title: 등차수열의 특정한 항만 더하기
// Time: O(n)
// Space: O(n)
function solution(a, d, included) {
  const arr = Array.from({ length: 101 }, () => 0);
  arr[0] = a;
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + d;
  }

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (included[i]) result += arr[i];
  }

  return result;
}
