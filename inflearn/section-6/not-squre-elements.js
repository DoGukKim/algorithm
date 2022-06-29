const main = (s) => {
  let result = "";
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    if (s[i] === ")") stack.pop();
    if (stack.length < 1 && s[i] !== "(" && s[i] !== ")") result += s[i];
  }
  console.log(result);
};
main("(A(BC)D)EF(G(H)(IJ)K)LM(N)");
