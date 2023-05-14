// Title: 배열의 원소만큼 추가하기
// Time: O(nm)
// Space: O(nm)
function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Array.from({ length: arr[i] }, () => arr[i]));
  }
  return result.flat();
}
