let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
// 시간 초과로 실패
input = input.map((i) => i.split(" ").map(Number));
const [R, C, T] = input.shift();
const cleanerPos = { top: 0, bottom: 0 };
const add = Array.from({ length: R }, () => Array(C).fill(0));
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

for (let x = 1; x < R; x++) {
  if (input[x][0] === -1) {
    cleanerPos["top"] = x;
    cleanerPos["bottom"] = x + 1;
    break;
  }
}

for (let i = 0; i < T; i++) {
  dustDiffusion();
  cleaningAirBy("top");
  cleaningAirBy("bottom");
}

const result = calcRemainDust();
console.log(result);

function dustDiffusion() {
  const room = Array.from({ length: R }, () => Array(C).fill(0));

  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (input[x][y] === -1 || input[x][y] === 0) continue;
      diffusion(x, y);
      updateDustStatus();
    }
  }
  // 다음 순환을 위한 현재 상태 재할당
  input = room;
  input[cleanerPos["top"]][0] = -1;
  input[cleanerPos["bottom"]][0] = -1;

  function diffusion(x, y) {
    const amount = Math.floor(input[x][y] / 5);
    let count = 0;

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;

      if (0 <= nx && nx < R && 0 <= ny && ny < C && input[nx][ny] !== -1) {
        add[nx][ny] += amount;
        count++;
      }
    }

    add[x][y] = input[x][y] - amount * count;
  }

  function updateDustStatus() {
    for (let x = 0; x < R; x++) {
      for (let y = 0; y < C; y++) {
        room[x][y] += add[x][y];
        add[x][y] = 0;
      }
    }
  }
}

function cleaningAirBy(direction) {
  if (direction === "top") rotateTop();
  if (direction === "bottom") rotateBottom();
}

function rotateTop() {
  let temp = 0;
  // right
  for (let y = 1; y < C; y++) {
    const subTemp = input[cleanerPos["top"]][y];
    input[cleanerPos["top"]][y] = temp;
    temp = subTemp;
  }
  // up
  for (let x = cleanerPos["top"] - 1; x >= 0; x--) {
    const subTemp = input[x][C - 1];
    input[x][C - 1] = temp;
    temp = subTemp;
  }
  // left
  for (let y = C - 2; y >= 0; y--) {
    const subTemp = input[0][y];
    input[0][y] = temp;
    temp = subTemp;
  }
  // down
  for (let x = 1; x <= cleanerPos["top"]; x++) {
    if (input[x][0] === -1) continue;
    const subTemp = input[x][0];
    input[x][0] = temp;
    temp = subTemp;
  }
}

function rotateBottom() {
  let temp = 0;
  // right
  for (let y = 1; y < C; y++) {
    const subTemp = input[cleanerPos["bottom"]][y];
    input[cleanerPos["bottom"]][y] = temp;
    temp = subTemp;
  }

  // down
  for (let x = cleanerPos["bottom"] + 1; x < R; x++) {
    const subTemp = input[x][C - 1];
    input[x][C - 1] = temp;
    temp = subTemp;
  }

  // left
  for (let y = C - 2; y >= 0; y--) {
    const subTemp = input[R - 1][y];
    input[R - 1][y] = temp;
    temp = subTemp;
  }

  // top
  for (let x = R - 2; x >= cleanerPos["bottom"]; x--) {
    if (input[x][0] === -1) continue;
    const subTemp = input[x][0];
    input[x][0] = temp;
    temp = subTemp;
  }
}

function calcRemainDust() {
  let count = 0;
  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (input[x][y] === -1 || input[x][y] === 0) continue;
      count += input[x][y];
    }
  }

  return count;
}
