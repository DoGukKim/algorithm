let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const saws = input.slice(0, 4).map((i) => i.split("").map(Number));
const k = Number(input[4]);
const orders = input
  .slice(5, input.length)
  .map((i) => i.split(" ").map(Number));

const handleRotate = (sawIndex, dir) => {
  if (dir === -1) {
    // 반시계방향
    let temp = saws[sawIndex][0];
    for (let i = 0; i < 8; i++) {
      saws[sawIndex][i] = saws[sawIndex][i + 1];
    }
    saws[sawIndex][7] = temp;
  }

  if (dir === 1) {
    // 시계방향
    let temp = saws[sawIndex][7];
    for (let i = 7; i >= 0; i--) {
      saws[sawIndex][i] = saws[sawIndex][i - 1];
    }
    saws[sawIndex][0] = temp;
  }
};

for (let i = 0; i < k; i++) {
  const [sawIndex, dir] = orders[i];
}

// 12시 방향 최댓값 구하기
