// Title: 올바른 괄호
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: (()(()))(()
function main(s) {
  let c = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") c++;
    if (s[i] === ")") c--;
  }

  return c !== 0 ? "NO" : "YES";
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    if (s[i] === ")") {
      if (stack.length < 1) return "NO";
      stack.pop();
    }
  }

  return stack.length ? "NO" : "YES";
}

console.log(main("(()(()))(()")); // -> NO
console.log(main("()")); // -> YES
console.log(main("())")); // -> NO
console.log(main("()(")); // -> NO
