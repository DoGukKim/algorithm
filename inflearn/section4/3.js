// Title: 멘토링
// Time: O(nm^2)
// Space: O(1)
function main(n, m, matrix) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    let minRank = 0;
    for (let j = 0; j < m; j++) {
      const currentRank = matrix[j].indexOf(i) + 1;
      if (minRank < currentRank) minRank = currentRank;
    }

    result += n - minRank;
  }

  console.log(result);
}

main(4, 3, [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]);
