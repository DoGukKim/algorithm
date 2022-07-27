// Time: O(n)
// Space: O(n)
const main = (word) => {
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

console.log(main("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

// 재귀식 풀이
// Time: O(n^2)
// Space: O(n)
const recursion = (word, stack = [], result = "") => {
  if (word.length === 0) return result;

  if (word[0] === "(") stack.push(word[0]);
  if (word[0] === ")") stack.pop();
  if (stack.length === 0 && word[0] !== "(" && word[0] !== ")")
    result += word[0];

  return recursion(word.slice(1), stack, result);
};

console.log(recursion("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
