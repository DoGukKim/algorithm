// Title: 배열의 원소 삭제하기
// Time: O(n)
// Space: O(n)
function solution(arr, delete_list) {
  const hash = {};
  for (let i = 0; i < delete_list.length; i++) {
    if (!hash[delete_list[i]]) hash[delete_list[i]] = true;
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) continue;
    result.push(arr[i]);
  }
  return result;
}
