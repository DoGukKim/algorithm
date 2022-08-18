// 방법 1
// Time: O(n*m)
// Space: O(n)
const main = (n, board) => {
  const students = Array.from({ length: n }, (_, i) => i + 1);
  let result = 0;

  for (let i = 0; i < students.length; i++) {
    let maxLastRank = -1;

    for (let j = 0; j < board.length; j++) {
      // 최대 마지막 랭크를 구하는 로직
      // 만약 최대 랭크가 4등이면 멘토가 될 수 있는 경우의 수가 존재하지 않게 됨
      const rank = board[j].findIndex((item) => item === students[i]);
      if (rank > maxLastRank) maxLastRank = rank;
    }

    // 학생들의 수 - 자신의 최대 마지막 랭크
    // 예: 나를 제외한 3명 중 최대 마지막 랭크 3를 빼면 멘토가 될 수 있는 경우 0이 도출
    result += students.length - 1 - maxLastRank;
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

// 방법 2
// Time: O(n*m^2)
// Space: O(n*m)
const main2 = (n, board) => {
  const students = Array.from({ length: n }, (_, i) => i + 1);

  let maxLastRank = -1;
  let result = 0;

  for (let i = 0; i < students.length; i++) {
    maxLastRank = -1;

    for (let j = 0; j < board.length; j++) {
      const rank = dfs(board[j], students[i]);
      if (rank > maxLastRank) maxLastRank = rank;
    }

    result += students.length - 1 - maxLastRank;
  }

  return result;
};

const dfs = (tests, stu, index = 0) => {
  if (stu === tests[index]) {
    return index;
  }

  return dfs(tests, stu, index + 1);
};

console.log(
  main2(4, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
