let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);

const queue = [[1, 0, 0]];
while (queue.length) {
  let [e, c, t] = queue.shift();
  if (e === input) return console.log(t);

  queue.push([e, e, t + 1]);
  if (c > 0) queue.push([e + c, c, t + 1]);
  if (e - 1 > 0) queue.push([e - 1, c, t + 1]);
}
