const input = require("fs").readFileSync("./input.txt").toString().trim();

// Time: O(2^n)
// Space: O(n)
const main = (n) => {
  let result = 0;
  const moves = [];

  function recursion(n, src, via, dst) {
    if (n === 0) {
      return;
    }

    recursion(n - 1, src, dst, via);
    moves.push([src, dst]);
    result++;
    recursion(n - 1, via, src, dst);
  }
  recursion(n, 1, 2, 3);

  console.log(result);
  console.log(moves.map((i) => i.join(" ")).join("\n"));
};

main(Number(input)); // input -> 3
