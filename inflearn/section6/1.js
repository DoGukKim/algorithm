// 방법 1
// Time: O(n)
// Space: O(1)
const main = (s) => {
  let openBracketCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") openBracketCount++;
    else {
      // 여는 괄호가 하나도 없을 시 현재 요소가 닫는 브라켓이라면 올바르지 않는 괄호가 됨.
      if (openBracketCount < 1) return "NO";
      openBracketCount--;
    }
  }

  // 반복문이 종료된 이후에도 오픈 브라켓 수가 있다면 올바르지 않는 괄호가 됨.
  return openBracketCount > 0 ? "NO" : "YES";
};

console.log(main("()")); // -> YES
console.log(main("())")); // -> NO
console.log(main("()(")); // -> NO

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      // 스택에 오픈 브라켓이 없으면 올바르지 않는 괄호가 됨.
      if (stack.length < 1) return "NO";
      stack.pop();
    }
  }

  // 반복문 이후에도 스택에 괄호가 남는다면 올바르지 않는 괄호가 됨.
  return stack.length > 0 ? "NO" : "YES";
};

console.log(main2("()")); // -> YES
console.log(main2("())")); // -> NO
console.log(main2("()(")); // -> NO

// 방법 3
// Time: O(n)
// Space: O(n)
const main3 = (s) => {
  function dfs(i, count) {
    if (i === s.length) {
      if (count > 0) return "NO";
      return "YES";
    }

    if (s[i] === ")") {
      if (count < 1) return "NO";
      count--;
    } else {
      count++;
    }

    return dfs(i + 1, count);
  }
  return dfs(0, 0);
};

console.log(main3("()")); // -> YES
console.log(main3("())")); // -> NO
console.log(main3("()(")); // -> NO
