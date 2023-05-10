// Title: 안전지대
// Time: O(n^2)
// Space: O(n)
function solution(board) {
  const dir = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  const queue = [];
  let safeAreaCnt = 0;
  const n = board.length;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] === 1) {
        queue.push([x, y]);
        continue;
      }
      safeAreaCnt++;
    }
  }

  bfs();
  return safeAreaCnt;

  function bfs() {
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 8; i++) {
        const [dx, dy] = dir[i];
        const nx = x + dx;
        const ny = y + dy;
        if (0 <= nx && nx < n && 0 <= ny && ny < n && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          safeAreaCnt--;
        }
      }
    }
  }
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
