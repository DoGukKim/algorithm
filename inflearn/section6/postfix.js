// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (string) => {
  const stack = [];
  const operator = Object.freeze({
    "*": true,
    "/": true,
    "+": true,
    "-": true,
  });

  for (let i = 0; i < string.length; i += 1) {
    if (operator[string[i]]) {
      const sum = new Function("a", "b", `return b ${string[i]} a`);
      const result = sum(stack.pop(), stack.pop());
      stack.push(result);
    } else stack.push(Number(string[i]));
  }

  return stack[0];
};

console.log(main("352+*9-"));

// Recursive
// TimeComplexity O(n^2)
// SpaceComplexity O(n)
const operator = Object.freeze({
  "*": true,
  "/": true,
  "+": true,
  "-": true,
});

const recursion = (string, stack = []) => {
  if (string.length === 0) return stack[0];

  if (operator[string[0]]) {
    const sum = new Function("a", "b", `return b ${string[0]} a`);
    const result = sum(stack.pop(), stack.pop());
    stack.push(result);
  } else stack.push(Number(string[0]));

  return recursion(string.slice(1), stack);
};

console.log(recursion("352+*9-"));
