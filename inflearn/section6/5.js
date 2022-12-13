// Title: 쇠막대기
// Time: O(n)
// Space: O(n)
function main(s) {
  let result = 0;
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (s[i - 1] === "(") result += stack.length;
      else result += 1;
    }
  }

  console.log(result);
}

main("()(((()())(())()))(())");
