// Time: O(n^2)
// Space: O(1)
const main = (board) => {
  let result = 0;

  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board[0].length; c += 1) {
      const current = board[r][c];

      let top = board[r - 1] ? board[r - 1][c] : 0;
      let right = board[r][c + 1] ? board[r][c + 1] : 0;
      let bottom = board[r + 1] ? board[r + 1][c] : 0;
      let left = board[r][c - 1] ? board[r][c - 1] : 0;

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
};

console.log(
  main([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);

// Recursive (Pending)
const recursion = (board) => {
  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board[0].length; c += 1) {}
  }
};
console.log(
  recursion([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
