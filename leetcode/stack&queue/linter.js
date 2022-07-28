// 풀이
// 117ms 44.5 MB
const solution = (s) => {
  const stack = [];
  let result = true;
  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      stack.push(s[i]);
    }
    if ([")", "}", "]"].includes(s[i])) {
      const openBracket = stack.pop();
      if (openBracket === null) result = false;
      if (s[i] !== { "(": ")", "{": "}", "[": "]" }[openBracket])
        result = false;
    }
  }
  if (stack[0]) result = false;
  return result;
};

// 다른 사람 풀이
// 64ms 38.9 MB
const otherSolution = () => {
  if (s.length === 0 || s.length % 2 !== 0) {
    return false;
  }

  const closingParentheses = Object.freeze({
    "(": ")",
    "{": "}",
    "[": "]",
  });

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in closingParentheses) {
      stack.push(s[i]);
    } else if (s[i] !== closingParentheses[stack.pop()]) {
      return false;
    }
  }

  return stack.length == 0;
};
