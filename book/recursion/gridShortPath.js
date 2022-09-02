// Time: O(2^r+c)
// Space: O(r+c)
const main = (r, c) => {
  let result = Infinity;

  function dfs(row, colum, count) {
    if (row === 0 || colum === 0) return;
    if (row === 1 && colum === 1) {
      if (count < result) result = count;
      return;
    }

    count++; // 경로 마다 1씩 누적
    dfs(row - 1, colum, count); // 아래로 가는 방법
    dfs(row, colum - 1, count); // 오른쪽으로 가는 방법
  }
  dfs(r, c, 0);

  return result;
};

console.log(main(3, 7));
