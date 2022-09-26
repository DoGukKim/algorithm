// Time: O(4^n+m)
// Space: O(n+m)
const main = (matrix) => {
  let result = 0;
  const visited = new Set();

  function dfs(r, c, visited) {
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

    dfs(r - 1, c, visited);
    dfs(r, c + 1, visited);
    dfs(r + 1, c, visited);
    dfs(r, c - 1, visited);
    visited.delete(pos);
  }
  dfs(0, 0, visited);

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
