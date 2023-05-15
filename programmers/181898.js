// Title: 가까운 1 찾기
// Time: O(n)
// Space: O(1)
function solution(arr, idx) {
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (i === idx) flag = true;
    if (flag && arr[i] === 1) return i;
  }

  return -1;
}
