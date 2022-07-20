const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.slice(1);

const solution = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let acc = 0;

    for (let j = 0; j < arr[i].length; j += 1) {
      acc += arr[j] === "(" ? 1 : -1;
      if (acc < 0) break;
    }

    result.push(acc !== 0 ? "NO" : "YES");
  }

  console.log(result.join("\n"));
};

solution(input);
