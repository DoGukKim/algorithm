// 올바른 괄호
// Time: O(n)
// Space: O(1)
const main = (s) => {
  let openBracketCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") openBracketCount++;
    else {
      if (openBracketCount < 1) return false;
      openBracketCount--;
    }
  }

  return openBracketCount === 0;
};

console.log(main("(())()")); // -> true
console.log(main("(()(")); // -> false
