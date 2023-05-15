// Title: 2의 영역
// Time: O(n)
// Space: O(n)
function solution(arr) {
  const lt = arr.indexOf(2);
  const rt = arr.lastIndexOf(2);
  const result = arr.slice(lt, rt + 1);

  return result.length > 0 ? result : [-1];
}
