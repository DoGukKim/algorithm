// title: 가위 바위 보?
// time: O(tn)
// space: O(tn)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const t = Number(input[0]);
let p = 1;
const map = {
  R: "S",
  S: "P",
  P: "R",
};

let result = "";

for (let i = 0; i < t; i++) {
  const n = Number(input[p]);
  let player1 = 0;
  let player2 = 0;

  for (let j = p + 1; j <= p + n; j++) {
    const [p1, p2] = input[j].split(" ");
    if (p1 === p2) continue;
    if (map[p1] === p2) player1++;
    else player2++;
  }

  if (player1 === player2) {
    result += "TIE\n";
  } else if (player1 > player2) {
    result += "Player 1\n";
  } else {
    result += "Player 2\n";
  }

  p += n + 1;
}

console.log(result);
