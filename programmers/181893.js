// Title: 배열 조각하기
// Time: O(n)
// Space: O(n)
function solution(arr, query) {
  let lt = 0;
  let rt = arr.length - 1;

  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      rt = lt + query[i] + 1;
    } else {
      lt += query[i];
    }
  }

  const result = arr.slice(lt, rt);
  return result;
}
