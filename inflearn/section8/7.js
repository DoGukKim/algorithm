// Title: 최대점수 구하기
// 방법 1
// Time: O(2^n)
// Space: O(n)
function main(n, m, quiz) {
  let result = 0;
  dfs(0, 0, 0);
  console.log(result);

  function dfs(level, point, time) {
    if (level === n) return;
    if (time > m) return;

    if (result < point) result = point;
    dfs(level + 1, point + quiz[level][0], time + quiz[level][1]);
    dfs(level + 1, point, time);
  }
}

// 방법 2
// Time: O(n^n)
// Space: O(n)
function main(n, m, quiz) {
  let result = 0;
  dfs(0, 0, 0);
  console.log(result);

  function dfs(j, point, time) {
    for (let i = j; i < n; i++) {
      if (time > m) continue;
      if (result < point) result = point;
      dfs(i + 1, point + quiz[i][0], time + quiz[i][1]);
    }
  }
}
