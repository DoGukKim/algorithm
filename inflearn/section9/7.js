// 방법 1
const main = (matrix) => {
  let result = 0;
  const visited = new Set();

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (matrix[x][y] === 1) {
        if (dfs(x, y, visited) === true) result++;
      }
    }
  }

  return result;
};

const dfs = (x, y, visited) => {
  const xInBound = 0 < x && x < matrix.length;
  const yOutBound = 0 < y && y < matrix[0].length;
  if (!xInBound || !yOutBound) return null;
  if (matrix[x][y] === 0) return null;
  const pos = x + "," + y;
  if (visited.has(pos)) return null;
  visited.add(pos);

  dfs(x - 1, y - 1, visited);
  dfs(x - 1, y, visited);
  dfs(x - 1, y + 1, visited);
  dfs(x, y + 1, visited);
  dfs(x + 1, y + 1, visited);
  dfs(x + 1, y, visited);
  dfs(x + 1, y - 1, visited);
  dfs(x, y - 1, visited);

  return true;
};

const matrix = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];
console.log(main(matrix)); // -> 5

// 방법 2
const main2 = (matrix) => {
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function dfs(x, y) {
    matrix[x][y] = 0;

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const xInBound = 0 <= nx && nx < matrix.length;
      const yOutBound = 0 <= ny && ny < matrix[0].length;
      if (xInBound && yOutBound && matrix[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }

  let result = 0;
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (matrix[x][y] === 1) {
        result++;
        dfs(x, y);
      }
    }
  }

  return result;
};
