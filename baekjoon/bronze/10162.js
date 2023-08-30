// title: 전자레인지
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let t = Number(input);

if (t < 10) {
  return console.log(-1);
}

const result = [0, 0, 0];

while (t > 9) {
  const A = Math.floor(t / 300);
  const B = Math.floor(t / 60);
  const C = Math.floor(t / 10);

  if (A > 0) {
    result[0] += A;
    t = t - A * 300;
    continue;
  }

  if (B > 0) {
    result[1] += B;
    t = t - B * 60;
    continue;
  }

  if (C > 0) {
    result[2] += C;
    t = t - C * 10;
    continue;
  }
}

console.log(t > 0 ? -1 : `${result.join(" ")}`);
