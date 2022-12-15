// Title: 최대점수 구하기
// Time: O(2^n)
// Space: O(n)
function main(m, ps, pt) {
  let result = -Infinity;

  function dfs(level, time, point) {
    if (time > m) return;
    if (level === ps.length) {
      result = Math.max(result, point);
      return;
    }

    dfs(level + 1, time + pt[level], point + ps[level]);
    dfs(level + 1, time, point);
  }
  dfs(0, 0, 0);

  console.log(result);
}

main(20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4]);
