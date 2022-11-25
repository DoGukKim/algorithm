// Title: 격자판 최대합
// 방법 1
// Time: O(n^2)
// Space: O(1)
function main(grid) {
  let result = 0;
  let row = 0;
  let col = 0;
  let leftC = 0;
  let rightC = 0;

  for (let i = 0; i < grid.length; i++) {
    row = 0; // 매 순환시 초기화
    col = 0; // 매 순환시 초기화

    for (let j = 0; j < grid[0].length; j++) {
      row += grid[i][j]; // 행 누적
      col += grid[j][i]; // 열 누적
    }

    leftC += grid[i][i]; // 왼 대각 누적
    rightC += grid[i][grid.length - 1 - i]; // 오른 대각 누적

    result = Math.max(row, col, leftC, rightC);
  }

  return result;
}

console.log(
  main([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
); // -> 155
