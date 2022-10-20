// Title: 특이한 정렬
// 방법 1
// Time: O(n log n)
// Space: O(1)
// Input: [1, 2, 3, 4, 5, 6], 4
function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [aDiff, bDiff] = [Math.abs(a - n), Math.abs(b - n)];

    if (aDiff === bDiff) {
      return b - a;
    }

    return aDiff - bDiff;
  });
} // -> [ 4, 5, 3, 6, 2, 1 ]
