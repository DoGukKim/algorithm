// Title: 로또
// Time: O(t*6^k)
// Space: O(1) -> 6개를 뽑는 경우의 수는 고정이기 때문에
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" "));

let result = "";
for (let i = 0; i < input.length; i++) {
  const k = Number(input[i][0]);

  function dfs(idx, c) {
    if (c.length === 6) {
      result += `${c.join(" ")}\n`;
      return;
    }

    for (let j = idx; j <= k; j++) {
      c.push(input[i][j]);
      dfs(j + 1, c);
      c.pop();
    }
  }

  dfs(1, []);

  result += "\n";
}

console.log(result);
