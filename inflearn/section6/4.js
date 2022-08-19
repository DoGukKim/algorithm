// 방법 1
// Time: O(n)
// Space: O(n)
const main = (s) => {
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

  return stack[0];
};

console.log(main("352+*9-"));

// 방법 2
// Time: O(n^2)
// Space: O(n)
const main2 = (s) => {
  const stack = [];
  const operator = Object.freeze({
    "*": true,
    "/": true,
    "+": true,
    "-": true,
  });

  function dfs(index) {
    if (index === s.length) {
      return;
    }

    if (operator[s[index]]) {
      const sum = new Function("a", "b", `return b ${s[index]} a`);
      const result = sum(stack.pop(), stack.pop());
      stack.push(result);
    } else stack.push(Number(s[index]));

    dfs(index + 1);
  }
  dfs(0);

  return stack[0];
};

console.log(main2("352+*9-"));
