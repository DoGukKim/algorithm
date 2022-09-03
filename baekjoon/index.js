const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const format = input.map((day) => day.split(" ").map((item) => Number(item)));
// console.log(format);

const main = (n) => {
  let max = -Infinity;

  function dfs(index, day, price) {
    if (index === n.length) {
      return;
    }
    if (day > n.length + 1) {
      console.log(price);
      return;
    }

    const [d, p] = n[index];

    dfs(index + 1, day + d, price + p);
    dfs(index + 1, day, price);
  }
  dfs(0, 0, 0);

  return max;
};

console.log(main(format));
