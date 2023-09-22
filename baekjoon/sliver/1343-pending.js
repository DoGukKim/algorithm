let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let result = "";

for (const poly of ["AAAA", "BB"]) {
  let recent = "";
  let acc = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "X" || input[i] === ".") {
      if (acc === 4) {
        continue;
      }
      if (recent === "") {
        recent = input[i];
        acc++;
        continue;
      }

      if (recent === input[i]) acc++;

      if (recent !== input[i]) {
        recent = input[i];
        acc = 0;
      }
    }
  }
}
