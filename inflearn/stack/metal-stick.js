const solution = (s) => {
  let result = 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === "(") result += stack.length;
      else result += 1;
    }
  }
  return result;
};
const result = solution("()(((()())(())()))(())");
console.log(result);
