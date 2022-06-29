const main = (s) => {
  const stack = [];
  const operator = Object.freeze({
    "*": true,
    "/": true,
    "+": true,
    "-": true,
  });

  for (let i = 0; i < s.length; i++) {
    if (!operator[s[i]]) {
      stack.push(Number(s[i]));
    } else {
      const sum = new Function("a", "b", `return b ${s[i]} a`);
      const result = sum(stack.pop(), stack.pop());
      stack.push(result);
    }
  }

  return stack[0];
};

main("352+*9-");
