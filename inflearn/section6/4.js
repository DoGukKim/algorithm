// Title: 후위식 연산
// Time: O(n)
// Space: O(n)
function main(s) {
  const stack = [];
  const operator = Object.freeze({
    "*": true,
    "/": true,
    "+": true,
    "-": true,
  });

  for (let i = 0; i < s.length; i++) {
    if (operator[s[i]]) {
      // new Function은 문자열로 된 식을 실행 가능하게 해줌.
      const sum = new Function("a", "b", `return b ${s[i]} a`);
      const result = sum(stack.pop(), stack.pop());
      stack.push(result);
    } else stack.push(Number(s[i]));
  }

  console.log(stack[0]);
}

main("352+*9-");
