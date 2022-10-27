const input = require("fs").readFileSync("./input.txt").toString().trim();

// Time: O(2^n)
// Space: O(n)
const main = (n) => {
  let result = 0;
  const moves = [];

  function move(n, src, dst, via) {
    if (n === 1) {
      moves.push([src, dst]);
      return;
    }

    move(n - 1, src, via, dst);
    moves.push([src, dst]);
    move(n - 1, via, dst, src);
  }
  move(n, 1, 3, 2);

  console.log(result);
  console.log(moves.map((i) => i.join(" ")).join("\n"));
};

main(Number(input)); // input -> 3

// [
//   [1, 3],
//   [1, 2],
//   [3, 2],
//   [1, 3],
//   [2, 1],
//   [2, 3],
//   [1, 3],
// ];
