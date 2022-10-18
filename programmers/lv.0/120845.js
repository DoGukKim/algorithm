// Title: 공 던지기
// 방법 1
// Time: O(1)
// Space: O(1)
// Input: [10, 8, 6], 3
function solution(box, n) {
  return (
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
  );
} // -> 12
