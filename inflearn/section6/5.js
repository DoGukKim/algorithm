// 방법 1
// Time: O(n)
// Space: O(n)
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
