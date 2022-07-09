// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (s) => {
  let result = "";
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(") stack.push(s[i]);
    if (s[i] === ")") stack.pop();
    if (stack.length < 1 && s[i] !== "(" && s[i] !== ")") result += s[i];
  }

  return result;
};

console.log(main("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
