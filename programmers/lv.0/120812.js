// Title: 최빈값 구하기
// 방법 1
// Time: O(n log n)
// Space: O(n)
// Input: [1, 2, 3, 3, 3, 4], 3
function solution(array) {
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    map.set(array[i], (map.get(array[i]) || 0) + 1);
  }

  map = [...map].sort((a, b) => b[1] - a[1]);
  return map.length === 1 || map[0][1] > map[1][1] ? map[0][0] : -1;
} // -> 3
