// 최대점수 구하기
// Time: O(n*m)
// Space: O(m)
function main(m, n) {
  const dy = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < n.length; i++) {
    let s = n[i][0];
    let t = n[i][0];
    for (let j = m; j >= t; j--) {
      dy[j] = Math.max(dy[j], dy[j - t] + s);
    }
  }

  console.log(dy[m]);
}

main(20, [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]);
