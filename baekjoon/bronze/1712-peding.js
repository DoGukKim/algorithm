let input = require("fs").readFileSync("./input.txt").toString().trim();

input = input.split(" ").map(Number);
const [a, b, c] = input;
function main() {
  if (b >= c) return console.log("-1");
  let cnt = 0;

  while (a + b * cnt >= c * cnt) {
    cnt++;
  }

  console.log(cnt);
}

main();
