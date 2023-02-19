let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m, r] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));

for (let i = 0; i < r; i++) {
  rotate();
}

let result = "";
for (let i = 0; i < n; i++) {
  result += `${input[i].join(" ")}\n`;
}
console.log(result);

function rotate() {
  const rotateCountOfInside = Math.min(n, m) / 2;

  for (let cnt = 0; cnt < rotateCountOfInside; cnt++) {
    let temp = input[cnt][cnt];

    for (let i = cnt; i < m - cnt - 1; i++) {
      input[cnt][i] = input[cnt][i + 1];
    }

    for (let i = cnt; i < n - cnt - 1; i++) {
      input[i][m - cnt - 1] = input[i + 1][m - cnt - 1];
    }

    for (let i = m - cnt - 1; i > cnt; i--) {
      input[n - cnt - 1][i] = input[n - cnt - 1][i - 1];
    }

    for (let i = n - cnt - 1; i > cnt; i--) {
      input[i][cnt] = input[i - 1][cnt];
    }

    input[cnt + 1][cnt] = temp;
  }
}
