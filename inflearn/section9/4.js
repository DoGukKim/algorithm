// 방법 1
// Time: O(4^n+m)
// Space: O(n+m)
const main = (matrix) => {
  let result = 0;
  const visited = new Set();

  function dfs(r, c) {
    const rowOutBound = r < 0 || r > matrix.length - 1;
    const columOutBound = c < 0 || c > matrix[0].length - 1;
    if (rowOutBound || columOutBound) return;
    if (matrix[r][c] === 1) return;

    const pos = r + "," + c;
    if (visited.has(pos)) return false;

    if (r === 6 && c === 6) {
      result++;
      return;
    }

    visited.add(pos);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r + 1, c);
    dfs(r, c - 1);
    visited.delete(pos);
  }
  dfs(0, 0);

  return result;
};

const matrix = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(main(matrix)); // -> 8

// 방법 2
// Time: O(4^n+m)
// Space: O(n+m)
const main2 = (matrix) => {
  let result = 0;
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  function dfs(r, c) {
    if (r === matrix.length - 1 && c === matrix[0].length - 1) {
      result++;
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (
        nr > -1 &&
        nr < matrix.length &&
        nc > -1 &&
        nc < matrix[0].length &&
        matrix[nr][nc] === 0
      ) {
        matrix[nr][nc] = 1;
        dfs(nr, nc);
        matrix[nr][nc] = 0;
      }
    }
  }

  matrix[0][0] = 1;
  dfs(0, 0);

  return result;
};
