// Title: 삼각형의 완성조건 (2)
// 방법 1
// Time: O(n)
// Space: O(n)
// Input:[3, 6],5
function solution(sides) {
  const result = [];

  // max - min < x < max + min
  for (
    let i = Math.max(...sides) - Math.min(...sides) + 1;
    i < sides[0] + sides[1];
    i++
  ) {
    result.push(i);
  }

  return result.length;
} // -> 5
