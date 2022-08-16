// 방법 1
// Time: O(n^2)
// Space: O(1)
const main = (board) => {
  let result = 0,
    row = 0,
    colum = 0,
    leftCross = 0,
    rightCross = 0;

  for (let r = 0; r < board.length; r++) {
    row = 0;
    colum = 0;

    for (let c = 0; c < board[0].length; c++) {
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

// 방법 2
// Time: O(n^n)
// Space: O(n^2)
const main2 = (board) => {
  let result = 0;

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      const row = calcRow(board, r, c);
      const colum = calcColum(board, r, c);
      result = Math.max(result, colum, row);
    }

    const leftCross = calcLeftCross(board, r, r);
    const rightCross = calcRightCross(board, r, board.length - 1);
    result = Math.max(result, leftCross, rightCross);
  }

  return result;
};

const calcRow = (board, r, c, sum = 0) => {
  if (c === board[0].length) return sum;
  return calcRow(board, r, c + 1, sum + board[r][c]);
};

const calcColum = (board, r, c, sum = 0) => {
  if (r === board.length) return sum;
  return calcColum(board, r + 1, c, sum + board[r][c]);
};

const calcLeftCross = (board, r1, r2, sum = 0) => {
  if (r1 === board.length) return sum;
  return calcLeftCross(board, r1 + 1, r2 + 1, sum + board[r1][r2]);
};

const calcRightCross = (board, r1, r2, sum = 0) => {
  if (r2 === 0) return sum;
  return calcRightCross(board, r1, r2 - 1, sum + board[r1][r2]);
};

console.log(
  main2([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
