let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const n = input[0];
const tree = {};
for (let i = 1; i < input.length; i++) {
  const [v, e] = input[i];
  if (!(v in tree)) tree[v] = [];
  if (!(e in tree)) tree[e] = [];
  tree[v].push(e);
  tree[e].push(v);
}
