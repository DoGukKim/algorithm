// title: 잃어버린 괄호
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const newInput = [];
let sum = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === "+" || input[i] === "-") {
    newInput.push(sum);
    newInput.push(input[i]);
    sum = "";
    continue;
  }

  sum += input[i];
}

if (sum.length > 0) {
  newInput.push(sum);
}

const formattedInput = newInput.map((i) => (!isNaN(i) ? Number(i) : i));

const stack = [];
for (let i = 0; i < formattedInput.length; i++) {
  if (formattedInput[i] === "+") {
    stack.push(stack.pop() + formattedInput[i + 1]);
    i++;
    continue;
  }

  stack.push(formattedInput[i]);
}

console.log(eval(stack.join("")));
