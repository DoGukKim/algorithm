// 방법 1
// Time: O(n)
// Space: O(n)
const main = (s) => {
  let result = "";
  let openBracketCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openBracketCount++;
      continue;
    }

    if (s[i] === ")") {
      openBracketCount--;
      continue;
    }

    if (openBracketCount === 0) {
      result += s[i];
    }
  }

  return result;
};

console.log(main("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (word) => {
  let result = "";
  const stack = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "(") stack.push(word[i]);
    if (word[i] === ")") stack.pop();
    if (stack.length === 0 && word[i] !== "(" && word[i] !== ")")
      result += word[i];
  }

  return result;
};

console.log(main2("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
