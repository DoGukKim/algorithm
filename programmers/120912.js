// Title: 7의 개수
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: [7, 77, 17]
function solution(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    let c = array[i];
    while (c) {
      if (c % 10 === 7) result++;
      c = Math.floor(c / 10);
    }
  }

  return result;
} // -> 4
