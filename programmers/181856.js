// Title: 배열 비교하기
// Time: O(n)
// Space: O(1)
function solution(arr1, arr2) {
  if (arr1.length > arr2.length) return 1;
  if (arr1.length < arr2.length) return -1;

  const sumA = arr1.reduce((acc, cur) => acc + cur, 0);
  const sumB = arr2.reduce((acc, cur) => acc + cur, 0);
  if (sumA === sumB) return 0;

  if (sumA > sumB) return 1;
  else return -1;
}
