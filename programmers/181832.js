// Title: 정수를 나선형으로 배치하기
// Time: O(n^2)
// Space: O(n^2)
function solution(n) {
  // n x n 배열 초기화
  const arr = Array.from(Array(n), () => new Array(n).fill(0));

  // 방향 설정 (우, 하, 좌, 상)
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let x = 0;
  let y = 0; // 현재 위치
  let direction = 0; // 현재 방향
  let num = 1; // 채워넣을 숫자

  // 1부터 n^2까지 숫자를 채워나감
  for (let i = 1; i <= n ** 2; i++) {
    arr[y][x] = num;

    // 다음 위치로 이동
    const nx = x + dx[direction];
    const ny = y + dy[direction];

    // 다음 위치가 범위를 벗어나거나 이미 숫자가 채워져 있는 경우 방향 전환
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || arr[ny][nx] !== 0) {
      direction = (direction + 1) % 4;
    }

    x = x + dx[direction];
    y = y + dy[direction];
    num++;
  }

  return arr;
}
