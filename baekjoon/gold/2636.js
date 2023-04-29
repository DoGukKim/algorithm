// Title: 치즈
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();

// 시간, 치즈 상태
let result = [0, 0];
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

while (true) {
  const air = Array.from({ length: n }, () => Array(m).fill(0));
  checkAir(air);

  const [copy, cheeseCount] = copyMatrixWithCheeseCount();
  result[1] = cheeseCount;

  const remainCount = meltCheese(copy, air);

  result[0]++;
  result[1] -= remainCount;
  input = copy;

  if (!result[1]) {
    console.log(`${result[0]}\n${result[1] + remainCount}`);
    return;
  }
}

function checkAir(mx) {
  const stack = [[0, 0]];

  while (stack.length) {
    const [x, y] = stack.pop();
    mx[0][0] = 1;

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < m &&
        input[nx][ny] === 0 &&
        mx[nx][ny] === 0
      ) {
        mx[nx][ny] = 1;
        stack.push([nx, ny]);
      }
    }
  }
}

function copyMatrixWithCheeseCount() {
  let count = 0;
  const mx = Array.from({ length: n }, () => Array(m).fill(0));

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      mx[x][y] = input[x][y];
      if (input[x][y] === 1) count++;
    }
  }

  return [mx, count];
}

function meltCheese(copy, air) {
  let count = 0;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (input[x][y] === 0) continue;

      for (let i = 0; i < 4; i++) {
        const [dx, dy] = direction[i];
        const nx = x + dx;
        const ny = y + dy;
        if (
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < m &&
          copy[x][y] === 1 &&
          input[nx][ny] === 0 &&
          air[nx][ny] === 1
        ) {
          copy[x][y] = 0;
          count++;
        }
      }
    }
  }

  return count;
}
