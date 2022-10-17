// Title: 가까운 수
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: [3, 10, 28], 20
function solution(array, n) {
  let result = Infinity;
  let min = Infinity;

  for (let i = 0; i < array.length; i++) {
    const curDis = Math.abs(n - array[i]);
    if (curDis < min) {
      result = array[i];
      min = curDis;
    } else if (curDis === min) {
      if (result > array[i]) result = array[i];
    }
  }

  return result;
} // -> 28
