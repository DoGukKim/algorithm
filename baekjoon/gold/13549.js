// Title: 이모티콘
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);

const queue = [[1, 0, 0]];
const map = new Map();
while (queue.length) {
  let [e, c, t] = queue.shift();
  if (e === input) return console.log(t);
  if (!map.has(e + "," + c)) map.set(e + "," + c, t);

  if (!map.has(e + "," + e)) queue.push([e, e, t + 1]);
  if (c > 0 && !map.has(e + c + "," + c)) {
    map.set(e + c + "," + c, t);
    queue.push([e + c, c, t + 1]);
  }
  if (e - 1 > 0 && !map.has(e - 1 + "," + c)) {
    map.set(e - 1 + "," + c, t);
    queue.push([e - 1, c, t + 1]);
  }
}
