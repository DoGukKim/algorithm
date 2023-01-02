let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const k = Number(input.shift());
input = input[0].split(" ");
const ch = Array.from({ length: k }, () => 0);
const all = [];

function dfs(l, j, c) {
  if (l === k) {
    c.push(j);
    const s = `return ${c.slice().join(" ")}`;
    const fn = new Function(s);
    if (fn()) all.push(c.slice().join(""));
    return;
  }

  for (let i = j; i <= 9; i++) {
    if (ch[l] === 0) {
      ch[l] = 1;
      c.push(i);
      c.push(input[l]);
      dfs(l + 1, i + 1, c);
      c.pop();
      c.pop();
      ch[l] = 0;
    }
  }
}
dfs(0, 0, []);
console.log(all);
