// Title: 괄호문자제거
// 방법 1
// Time: O(n)
// Space: O(n)
function main(s) {
  let result = "";
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    if (s[i] === ")") stack.pop();
    if (stack.length === 0 && s[i] !== ")") result += s[i];
  }

  console.log(result);
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(s) {
  let result = "";
  let c = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") c++;
    if (s[i] === ")") c--;
    if (c === 0 && s[i] !== ")") result += s[i];
  }

  console.log(result);
}

main("(A(BC)D)EF(G(H)(IJ)K)LM(N)");
