const solution = (s) => {
  const stack = [];
  let razerCount = 0;
  const closingParentheses = Object.freeze({
    "(": ")",
    "{": "}",
    "[": "]",
  });
  for (let i = 0; i < s.length; i++) {
    if (s[i] in closingParentheses) {
      stack.push(s[i]);
    }
  }
  return razerCount;
};
// const result = solution("()(((()())(())()))(())");
const result = solution("(()())");
console.log(result);
