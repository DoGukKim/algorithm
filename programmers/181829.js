// Title: 이차원 배열 대각선 순회하기
// Time: O(n^2)
// Space: O(1)
function solution(board, k) {
  const r = board.length;
  const c = board[0].length;

  let result = 0;
  for (let x = 0; x < r; x++) {
    for (let y = 0; y < c; y++) {
      if (x + y <= k) result += board[x][y];
    }
  }
  return result;
}
