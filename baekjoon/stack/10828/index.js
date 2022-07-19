const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const main = (arr) => {
  const stack = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i].split(" ")[0]) {
      case "push":
        stack.push(Number(arr[i].split(" ")[1]));
        break;
      case "pop":
        stack.length ? console.log(stack.pop()) : console.log(-1);
        break;
      case "size":
        console.log(stack.length);
        break;
      case "empty":
        stack.length ? console.log(0) : console.log(1);
        break;
      case "top":
        stack.length ? console.log(stack[stack.length - 1]) : console.log(-1);
        break;

      default:
        break;
    }
  }
};
main(input);
