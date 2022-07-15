// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (brackets) => {
  const stack = [];

  for (let i = 0; i < brackets.length; i += 1) {
    if (brackets[i] === "(") stack.push(brackets[i]);
    if (brackets[i] === ")") stack.pop();
  }

  return stack.length > 0 ? "NO" : "YES";
};

console.log(main("(()(()))(()"));

// Recursive
// TimeComplexity O(n^2)
// SpaceComplexity O(n)
const recursion = (brackets, stack = []) => {
  if (brackets.length === 0) return stack.length > 0 ? "NO" : "YES";
  if (brackets[0] === "(") stack.push(brackets[0]);
  if (brackets[0] === ")") stack.pop();
  return recursion(brackets.slice(1), stack);
};

console.log(recursion("(()(()))(()"));
