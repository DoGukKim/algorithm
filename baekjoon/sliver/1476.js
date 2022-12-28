// Title: 날짜 계산
// Time: O(n)
// Space: O(1)
let input = require("fs").readFileSync("./input.txt").toString().trim();
input = input.split(" ").map(Number);

const [E, S, M] = input;
const y = Array.from({ length: 3 }, () => 1);
let result = 1;
while (true) {
  if (E === y[0] && S === y[1] && M === y[2]) {
    console.log(result);
    return true;
  }

  y[0] += 1;
  y[1] += 1;
  y[2] += 1;

  if (y[0] > 15) y[0] = 1;
  if (y[1] > 28) y[1] = 1;
  if (y[2] > 19) y[2] = 1;

  result++;
}
