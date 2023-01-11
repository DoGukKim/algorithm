// Title: 최대점수 구하기
// Time: O(n^n)
// Space: O(n)
function main(n, m, q) {
  let result = -Infinity;

  function dfs(j, t, sum) {
    for (let i = j; i < n; i++) {
      const [score, time] = q[i];
      if (t + time > m) continue;
      const max = dfs(i + 1, t + time, sum + score);
      if (result < max) result = max;
    }

    return sum;
  }

  dfs(0, 0, 0);
  console.log(result);
}

const q = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
main(5, 20, q);
