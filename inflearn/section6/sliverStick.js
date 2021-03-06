// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (sticks) => {
  let result = 0;
  const stack = [];

  for (let i = 0; i < sticks.length; i += 1) {
    if (sticks[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (sticks[i - 1] === "(") result += stack.length;
      else result += 1;
    }
  }

  return result;
};

console.log(main("()(((()())(())()))(())"));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(n)
const recursion = (sticks, index = 0, stack = [], result = 0) => {
  if (index === sticks.length) return result;

  if (sticks[index] === "(") stack.push("(");
  else {
    stack.pop();
    if (sticks[index - 1] === "(") result += stack.length;
    else result += 1;
  }

  return recursion(sticks, (index += 1), stack, result);
};

console.log(recursion("()(((()())(())()))(())"));
