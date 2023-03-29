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

// 방법3
// Time: O(n^2)
// Space: O(1)
function main(n, m, quiz) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    let sum = [quiz[i][0], quiz[i][1]];
    for (let j = 0; j < n; j++) {
      if (j !== i && sum[1] + quiz[j][1] <= m) {
        sum = [sum[0] + quiz[j][0], sum[1] + quiz[j][1]];
        if (result < sum[0]) result = sum[0];
      }
    }
  }

  console.log(result);
}

main(5, 20, [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]);
