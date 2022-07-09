// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (s) => {
  let result = 0;
  let stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (s[i - 1] === "(") result += stack.length;
      else result += 1;
    }
  }

  return result;
};

console.log(main("()(((()())(())()))(())"));
