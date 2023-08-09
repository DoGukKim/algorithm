// title: 추억 점수
// time: O(n^2)
// space: O(n)
function solution(name, yearning, photo) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < name.length; i++) {
    map.set(name[i], yearning[i]);
  }

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      sum += map.get(photo[i][j]) ?? 0;
    }
    result.push(sum);
  }

  return result;
}
