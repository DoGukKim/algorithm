// Title: 캐릭터의 좌표
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: ["left", "right", "up", "right", "right"],[11, 11]
function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case "right":
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case "up":
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case "down":
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}
