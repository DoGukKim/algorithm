// Title: 겹치는 선분의 길이
// Time: O(min to max)
// Space: O(min to max)
function solution(lines) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i][0] < min) min = lines[i][0];
    if (lines[i][1] > max) max = lines[i][1];
  }

  // Range 만큼 해시 생성
  const map = new Map();
  for (let j = min; j <= max; j++) {
    map.set(j, 0);
  }

  for (let i = 0; i < lines.length; i++) {
    let [s, e] = lines[i];

    // 시작, 끝 돌면서 1씩 추가
    for (let j = s + 1; j <= e; j++) {
      map.set(j, map.get(j) + 1);
    }
  }

  // 1보다 크면 겹치는 것들을 필터링해 반환
  return [...map].filter((i) => i[1] > 1).length;
}
