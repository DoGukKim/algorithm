const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.slice(1);

const solution = (s) => {
  for (let i = 0; i < s.length; i += 1) {
    const separate = s[i].split(" ");
    let result = "";
    for (let j = 0; j < separate.length; j += 1)
      result += `${separate[j].split("").reverse().join("")} `;

    console.log(result);
  }
};

solution(input);
