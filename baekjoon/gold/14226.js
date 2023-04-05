// Title: 이모티콘
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);

const queue = [[1, 0, 0]];
const memo = { "1,0": 1 };
while (queue.length) {
  const [screen, clipboard, time] = queue.shift();

  for (const [curScreen, curClipboard] of [
    [screen, screen],
    [screen + clipboard, clipboard],
    [screen - 1, clipboard],
  ]) {
    if (memo[`${curScreen},${curClipboard}`]) continue;
    if (curScreen < 0 || curScreen > 1000) continue;
    if (curScreen === input) return console.log(time + 1);

    memo[`${curScreen},${curClipboard}`] = 1;
    queue.push([curScreen, curClipboard, time + 1]);
  }
}
