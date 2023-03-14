// Title: 격자판 최대합
// Time: O(n^2)
// Space: O(1)
function main(n, matrix) {
  let result = 0;
  let leftCross = 0;
  let rightCross = 0;

  for (let x = 0; x < n; x++) {
    let row = 0;
    let colum = 0;

    for (let y = 0; y < n; y++) {
      row += matrix[x][y];
      colum += matrix[y][x];
    }

    leftCross += matrix[x][x];
    rightCross += matrix[x][n - 1 - x];

    result = Math.max(row, colum, leftCross, rightCross);
  }

  console.log(result);
}

main(5, [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]);
