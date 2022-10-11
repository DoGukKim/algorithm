// Title: 봉우리
// 방법 1
// Time: O(n^2)
// Space: O(1)
// Input:
// 5, 3, 7, 2, 3
// 3, 7, 1, 6, 1
// 7, 2, 5, 3, 4
// 4, 3, 6, 4, 1
// 8, 7, 3, 5, 2
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

  return result;
}

console.log(
  main([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
); // -> 10
