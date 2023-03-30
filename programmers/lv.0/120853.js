// Title: 컨트롤 제트
// Time: O(n)
// Space: O(n)
function solution(s) {
  s = s.split(" ");

  const stack = [0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "Z") {
      stack.pop();
      continue;
    }

    stack.push(stack[stack.length - 1] + Number(s[i]));
  }

  return stack[stack.length - 1];
}
