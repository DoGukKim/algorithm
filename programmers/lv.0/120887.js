// Title: k의 개수
// Time: O(nm)
// Space: O(1)
function solution(i, j, k) {
  let result = 0;
  for (let s = i; s <= j; s++) {
    result += countK(s);
  }

  return result;

  function countK(num) {
    let cnt = 0;
    while (num) {
      if (num % 10 === k) cnt++;

      num = Math.floor(num / 10);
    }
    return cnt;
  }
}
