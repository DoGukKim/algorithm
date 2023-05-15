// Title: 빈 배열에 추가, 삭제하기
// Time: O(nm)
// Space: O(nm)
function solution(arr, flag) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!flag[i]) {
      let count = arr[i];
      while (count--) result.pop();
      continue;
    }

    let count = arr[i] * 2;
    while (count--) result.push(arr[i]);
  }

  return result;
}
