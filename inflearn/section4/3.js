// Time: O(n*m)
// Space: O(n)
const main = (n, board) => {
  const students = Array.from({ length: n }, (_, i) => i + 1);
  let result = 0;

  for (let i = 0; i < students.length; i++) {
    let minRank = -1;

    for (let j = 0; j < board.length; j++) {
      const rank = board[j].findIndex((item) => item === students[i]);
      if (rank > minRank) minRank = rank;
    }

    result += students.length - 1 - minRank;
  }

  return result;
};

console.log(
  main(4, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
