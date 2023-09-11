let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

input = Number(input);

if (input === 1) return console.log("666");

let n = 1;
let num = 666;

while (true) {
  if (n === input) {
    console.log(num);
    return;
  }

  const str = String(num);
  let recent = "";
  let acc = 0;
  for (let i = 0; i < str.length; i++) {
    if (recent === "6" && str[i] === "6") acc++;

    if (recent === "" && str[i] === "6") acc++;

    recent = str[i];
  }

  if (acc === 3) n++;

  num++;
}
