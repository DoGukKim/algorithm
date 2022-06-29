const main = (s) => {
  let result = "YES";
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 && s[i] === ")") result = "NO";
    if (s[i] === "(") stack.push(s[i]);
    if (s[i] === ")") stack.pop();
  }

  if (stack.length !== 0) result = "NO";

  console.log(result);
};
main("(()(()))(()");
// main("(()))");
