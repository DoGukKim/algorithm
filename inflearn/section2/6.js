// Time: O(n^2) // n * n
// Space: O(1)
const main = (board) => {
  let result = 0,
    row = 0,
    colum = 0,
    leftCross = 0,
    rightCross = 0;

  for (let r = 0; r < board.length; r += 1) {
    row = 0;
    colum = 0;

    for (let c = 0; c < board[0].length; c += 1) {
      row += board[r][c];
      colum += board[c][r];
    }

    leftCross += board[r][r];
    rightCross += board[r][board.length - 1 - r];

    result = Math.max(row, colum, leftCross, rightCross);
  }

  return result;
};

console.log(
  main([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
