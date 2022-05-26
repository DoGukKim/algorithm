const solution = (s) => {
  let result = "";
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    }

    if (s[i] === ")") {
      stack.pop();
      continue;
    }

    if (stack.length === 0) {
      result += s[i];
    }
  }

  return result;
};

const result = solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)");
