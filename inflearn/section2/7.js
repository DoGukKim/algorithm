// Title: 봉우리
// 방법 1
// Time: O(n^2)
// Space: O(1)
function main(grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const current = grid[i][j];

      const top = grid[i - 1] ? grid[i - 1][j] : 0;
      const right = grid[i][j + 1] ? grid[i][j + 1] : 0;
      const bottom = grid[i + 1] ? grid[i + 1][j] : 0;
      const left = grid[i][j - 1] ? grid[i][j - 1] : 0;

      if (
        current > top &&
        current > right &&
        current > bottom &&
        current > left
      )
        result++;
    }
  }

  console.log(result);
}

// 방법 2
// Time: O(n^2)
// Space: O(1)
function main(matrix) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let isPeak = true;
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      isPeak = true;

      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];
        const xInBound = 0 <= nx && nx < matrix.length;
        const yInBound = 0 <= ny && ny < matrix[0].length;

        if (xInBound && yInBound && matrix[i][j] <= matrix[nx][ny]) {
          isPeak = false;
        }
      }

      if (isPeak) result++;
    }
  }

  console.log(result);
}

main([
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]);
